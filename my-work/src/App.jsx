import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   }

   const addFeedback = (newFeedback => { 
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
   })

   return (
      <>
         <Header text='This will show in React dev tools' />
         <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedbackData={feedback} />
            <FeedbackList feedbackData={feedback} handleDelete={ deleteFeedback } />
         </div>
      </>
   )
}

export default App;