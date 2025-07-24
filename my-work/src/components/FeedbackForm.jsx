import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
   const [text, setText] = useState('');
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState('');
   const [rating, setRating] = useState(10);

   const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

   useEffect(() => {
      if (feedbackEdit.edit === true) {
         setBtnDisabled(false);
         setText(feedbackEdit.item.text);
         setRating(feedbackEdit.item.rating);
      }
   }, [feedbackEdit]); // add feedbackEdit as a dependency, so whenever this changes, the effect runs

   const handleSubmit = (e) => {
      e.preventDefault();

      if (text.trim().length > 10) {
         const newFeedback = {
            text,
            rating,
         };

         if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback);
         } else {
            addFeedback(newFeedback);
         }
      }

      setText('');
   };

   const handleTextChange = (e) => {
      if (text === '') {
         setBtnDisabled(true);
         setMessage(null);
      } else if (text !== '' && text.trim().length <= 10) {
         setBtnDisabled(true);
         setMessage('Review must be at least 10 characters');
      } else {
         setBtnDisabled(false);
         setMessage(null);
      }

      setText(e.target.value);
   };

   return (
      <Card>
         <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
               <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
               <Button type="submit" isDisabled={btnDisabled}>
                  Send
               </Button>
            </div>

            {message && <div className="message">{message}</div>}
         </form>
      </Card>
   );
}

export default FeedbackForm;
