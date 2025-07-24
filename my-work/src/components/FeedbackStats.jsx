import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
   const { feedback } = useContext(FeedbackContext);

   let averageRating = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length || 0;

   averageRating = averageRating.toFixed(1).replace(/[.,]0$/, ''); // Round to one decimal place

   return (
      <div className="feedback-stats">
         <h4>{feedback.length} Reviews</h4>
         <h4>Average Rating: {averageRating}</h4>
      </div>
   );
}

export default FeedbackStats;
