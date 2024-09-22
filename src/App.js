import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Header.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import SendMail from './SendMail.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice.js';
import { login, selectUser } from './features/userSlice.js';
import Login from './Login.js';
import { auth } from './firebase.js';

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch(); 

    useEffect(() => {
        auth.onAuthStateChanged(user => {
          if(user) {
            dispatch(
              login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            })
          );
          }
        });
    });

    return (
      <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Routes>
                <Route path="/mail" element= {<Mail />} />
                <Route path="/" element= {<EmailList />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
      </Router>
    );
  };
  
  export default App;
