import React from 'react';
import './SendMail.css';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
// import firebase from 'firebase/compat/app';
// import { db } from './firebase.js';

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(closeSendMessage())

    }

    return (
        <div className='sendMail'>
            <div className='sendMail_header'>
                <h3>New Message</h3>
                <CloseIcon 
                    onClick={() => dispatch(closeSendMessage())} 
                    className='sendMail_close' 
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to'
                    type='text' 
                    placeholder='To' 
                    {...register('to', { required: true })}
                />
                {errors.to && <p className='sendMail_error'>To is required!</p>}

                <input 
                    name='subject' 
                    type='text' 
                    placeholder='Subject' 
                    {...register('subject', { required: true })}
                />
                {errors.subject && <p className='sendMail_error'>Subject is required!</p>}

                <input
                    name='message'
                    type='text' 
                    placeholder='Message...'
                    className='sendMail_message' 
                    {...register('message', { required: true })}
                />
                {errors.message && <p className='sendMail_error'>Message is required!</p>}

                <div className='sendMail_options'>
                    <Button 
                        className='sendMail_send'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
