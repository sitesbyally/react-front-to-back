import { useState } from "react";

import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);

   return (
      <>
         <Header text='This will show in React dev tools' />
         <div className="container">
            <FeedbackList feedbackData={feedback} />
         </div>
      </>
   )
}

export default App;