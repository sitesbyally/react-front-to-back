import PropTypes from 'prop-types'

function FeedbackStats({ feedbackData }) {
   let averageRating = feedbackData.reduce((acc, item) => acc + item.rating, 0) / feedbackData.length || 0;

   averageRating = averageRating.toFixed(1).replace(/[.,]0$/, ''); // Round to one decimal place

   return (
      <div className="feedback-stats">
         <h4>{feedbackData.length} Reviews</h4>
         <h4>Average Rating: { averageRating }</h4>
      </div>
   )
}

FeedbackStats.propTypes = {
   feedbackData: PropTypes.array.isRequired
}

export default FeedbackStats
