import { useState } from "react";

import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   }

   return (
      <>
         <Header text='This will show in React dev tools' />
         <div className="container">
            <FeedbackStats feedbackData={feedback} />
            <FeedbackList feedbackData={feedback} handleDelete={ deleteFeedback } />
         </div>
      </>
   )
}

export default App;