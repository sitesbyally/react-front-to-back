import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedbackData, handleDelete }) {
   if (!feedbackData || feedbackData.length === 0) {
      return <p>No feedback yet</p>
   }

   return (
      <div className="feedback-list">
         {feedbackData.map((item) => (
            <FeedbackItem key={item.id} item={item}
               handleDelete={handleDelete} />
         ))}  
      </div>
   )
}

FeedbackList.propTypes = {
   feedbackData: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
      })
   )
}

export default FeedbackList
