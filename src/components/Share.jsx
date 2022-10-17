import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
const Share = ({openShare,setOpenShare}) => {
  return (
    <div className={openShare?'share_open d-none d-md-flex':'share_close'}>
        <ul>
        <li ><a className='d-flex ' onClick={()=>setOpenShare(false)} href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/amrit.ach.16/"><FacebookOutlinedIcon className='mr-2'/> <span> Share on Facebook</span></a></li><br />
        <li><a className='d-flex '  onClick={()=>setOpenShare(false)} href="https://twitter.com/intent/tweet?text=https%3A//www.facebook.com/amrit.ach.16/"><TwitterIcon className='mr-2'/> <span> Share on Twitter </span></a> </li><br />
        <li><a className='d-flex '  onClick={()=>setOpenShare(false)} href=""><LinkedInIcon className='mr-2'/><span> Share on Linked in </span></a></li><br />
        <li><a className='d-flex '  onClick={()=>setOpenShare(false)} href=""><LinkIcon className='mr-2'/><span>Share on Facebook </span></a></li>
        </ul>
    </div>
  )
}

export default Share