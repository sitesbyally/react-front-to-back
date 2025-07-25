import { BrowserRouter as Router, Route, Routes /*NavLink*/ } from 'react-router-dom';

import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import AboutPage from './pages/AboutPage';

import FeedbackProvider from './context/FeedbackProvider';

function App() {
   return (
      <FeedbackProvider>
         <Router>
            <Header /*text="This will show in React dev tools"*/ />
            <div className="container">
               <Routes>
                  <Route
                     path="/"
                     exact
                     element={
                        <>
                           <FeedbackForm />
                           <FeedbackStats />
                           <FeedbackList />
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
      </FeedbackProvider>
   );
}

export default App;
