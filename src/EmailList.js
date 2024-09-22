import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './EmailList.css';
import Section from './Section.js';
import EmailRow from './EmailRow.js';
import { db } from './firebase.js';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(
          query(collection(db, 'emails'), orderBy('timestamp', 'desc')),   
          (snapshot) => {
            setEmails(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        );
        return unsubscribe;
      }, []);

  return ( 
    <div className='emailList'>
        <div className='emailList_settings'>
            <div className='emailList_settingsLeft'>
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className='emailList_settingsRight'>
            <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>

        <div className='emailList_sections'>
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
        </div>

        <div className='emailList_list'>
            {emails.map(({id, data: {to, subject, message, timestamp 
            }}) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow 
                title = "Twitch"
                subject = "Hey Fellow Streamer!!!"
                description = "This is a test"
                time = "10:01 pm"
            />

            <EmailRow 
                title = "IBM Careers"
                subject = "Your Job Recommendation"
                description = "Hi Preeti Mishra, job opportunities are here !!!"
                time = "03:45 pm"
            />

            <EmailRow 
                title = "Naukri Job"
                subject = "Your Job Recommendation"
                description = "Hello Preeti Mishra, There are 20 matching profiles for you!!!"
                time = "10:00 pm"
            />

            <EmailRow 
                title = "LinkedIn Job Alerts"
                subject = "Your Job Recommendation"
                description = "Hello Preeti Mishra, There are 20 matching profiles for you!!!"
                time = "8:10 am"
            />

            <EmailRow 
                title = "Coding Ninjas"
                subject = "Hey Preeti Mishra, Here is Golden opportunity foe you to boost your career!!!"
                description = "Grab the best one..."
                time = "12:09 pm"
            />

            <EmailRow 
                title = "Instagram"
                subject = "Login Alert !!!"
                description = "Hey Preeti Mishra, your Instagram with Username Preetimishra_16 has logged in recently in other device !!!"
                time = "11:50 pm"
            />

            <EmailRow 
                title = "Facebook"
                subject = "Password Reset Link !!!"
                description = "Hey Preeti Mishra, Your facebook Password Reset link given below..."
                time = "9:34 pm"
            />

            <EmailRow 
                title = "Gitika Tiwari"
                subject = "General Mail"
                description = "Hello Preeti Mishra, How are you!!!"
                time = "7:28 am"
            />

            <EmailRow 
                title = "Rishi Tiwari"
                subject = "Casual Mail"
                description = "Hello Buddy, This is Rishi Tiwari!!!"
                time = "2:56 am"
            />

            <EmailRow 
                title = "Preety Mishra"
                subject = "Hey Dude, How are you!!!"
                description = "This is a test"
                time = "5:07 am"
            />
            
        </div>

    </div>
  );
};

export default EmailList;

