import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='items-center flex shadow-md p-2 '>
         <img
          className="h-7"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
        <span className=' text-sm px-1 font-bold'>{name}</span>
        <p className='text-sm'>{message}</p>
    </div>
  )
}

export default ChatMessage