import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes /*NavLink*/ } from 'react-router-dom';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import AboutPage from './pages/AboutPage';

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id));
      }
   };

   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
   };

   return (
      <Router>
         <Header text="This will show in React dev tools" />
         <div className="container">
            <Routes>
               <Route
                  path="/"
                  exact
                  element={
                     <>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedbackData={feedback} />
                        <FeedbackList feedbackData={feedback} handleDelete={deleteFeedback} />
                     </>
                  }
               ></Route>
               <Route path="/about" element={<AboutPage />} exact />
            </Routes>

            {/* <NavLink to="/" activeClassName="active">
               Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
               About
            </NavLink> */}
         </div>
         <AboutIconLink />
      </Router>
   );
}

export default App;
