import React from 'react';

import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import "./EmailRow.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice.js';

function EmailRow({id, title, subject, description, time}) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
            id,
            title,
            subject,
            description,
            time,
      })
    );
    Navigate('/mail');
  };


  return (
    <div onClick={ openMail } className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox />
        <IconButton>
            <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className='emailRow_title'>
        {title}
      </div>
      <div className='emailRow_message'>
        <h4>{subject}{" "}
          <span className='emailRow_description'>-
              {description}
          </span>
        </h4>
      </div>

      <p className='emailRow_time'> {time} </p>
    </div>
  )
}

export default EmailRow;
