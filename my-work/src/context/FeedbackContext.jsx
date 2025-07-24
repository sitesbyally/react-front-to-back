import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });

   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true,
      });
   };

   const updateFeedback = (id, updatedItem) => {
      setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
   };

   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
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
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};

export default FeedbackContext;
