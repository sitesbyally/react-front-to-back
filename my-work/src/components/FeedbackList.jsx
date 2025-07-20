import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedbackData }) {
   if (!feedbackData || feedbackData.length === 0) {
      return <p>No feedback yet</p>
   }

   return (
      <div className="feedback-list">
         {feedbackData.map((item) => (
            <FeedbackItem key={item.id} item={item} />
         ))}  
      </div>
   )
}

export default FeedbackList
