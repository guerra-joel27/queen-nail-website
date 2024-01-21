import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

// the destination for the button when click is the previous page
const BackButton = ({destination='/'}) => {
  return (
    <div className='flex'>
        <Link to={destination}
        className='bg-sky-800 text-white px-4 py-1 rouded-lg w-fit'>
        <BsArrowLeft className='text-2x1'/>
        </Link>
    </div>
  )
}

export default BackButton