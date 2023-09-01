import React from 'react';
import './header.css';

import { BsLinkedin, BsGithub, BsPersonCircle, BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';
import { Stack } from '@mui/material';
import { LinkedIn, FileCopy, GitHub, Email } from '@mui/icons-material';


const HeaderV3 = ({ textColor }) => {
  return (
    <Stack direction='row' justifyContent='center' columnGap={8}>
      <a href="https://drive.google.com/file/d/1H3V5v_Uuwuqxi9T5-y1W73VBFBxcH-2u/view?usp=sharing" target="_blank"><FileCopy className='tab' fontSize='large' htmlColor={textColor} /></a>
      <a href="https://www.linkedin.com/in/mhartenorio/" target="_blank"><LinkedIn className='tab' fontSize='large' htmlColor={textColor} /></a>
      <a href="https://github.com/mhartenorio" target="_blank"><GitHub className='tab' fontSize='large' htmlColor={textColor} /></a>
      <a href="mailto:mhar@stanford.edu"><Email className='tab' fontSize='large' htmlColor={textColor} /></a>
    </Stack>
  );
}

export default HeaderV3;
