import { useState, useEffect } from 'react';
import FeedbackContext from './FeedbackContext';

const FeedbackProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [feedback, setFeedback] = useState([]);
   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });

   useEffect(() => {
      fetchFeedback();
   }, []);

   const fetchFeedback = async () => {
      const response = await fetch('/feedback?_sort=id&_order=desc');
      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
   };

   const deleteFeedback = async (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
         await fetch(`/feedback/${id}`, {
            method: 'DELETE',
         });

         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true,
      });
   };

   const updateFeedback = async (id, updatedItem) => {
      // update on the server
      const response = await fetch(`/feedback/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(updatedItem),
      });

      const data = await response.json();

      // update in the frontend (state)
      setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
   };

   const addFeedback = async (newFeedback) => {
      // needs to be async since we're awaiting the promise from fetch
      const response = await fetch('/feedback', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newFeedback),
      });

      const data = await response.json();

      setFeedback([data, ...feedback]);
   };

   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit, // this is the state for editing feedback
            updateFeedback,
            isLoading,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};

export default FeedbackProvider;
