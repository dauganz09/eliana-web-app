import React, { useState,useRef, useEffect } from 'react'
import { Avatar, ChatBody, ChatBox, ChatFooter, ChatHead, ChatHeader, ChatInput, ChatMsg, HeaderText, SendBtn } from './ChatElements'
import {AiOutlineMessage,AiOutlineCloseCircle,AiOutlineSend} from 'react-icons/ai'
import AI from '../../../images/aihead.png'
import TypeAnimation from 'react-type-animation';
import { RightSquareFilled } from '@ant-design/icons';

const BASE_URL = "https://eliana-chatbot-app.herokuapp.com/"

const Chat = () => {
  const [toggle,setToggle] = useState(false)
  const [chatmessage,setChatMessage] = useState([]);
  const [userinput,setUserInput] = useState('')
  const messagesEndRef = useRef(null)
  const [loading,setLoading] = useState(false);



const handleSubmit = (e)=>{
  e.preventDefault();
   setChatMessage(prevState => [...prevState,{type:'user',message: userinput}])
   setUserInput('');

   fetch(`${BASE_URL}predict`,{
      method: 'POST',
      body : JSON.stringify({message: userinput}),
      mode: 'cors',
      headers : {
        'Content-Type' : 'application/json'
      },
   })
   .then(r => r.json())
   .then(data=>{
    let msg = {type: 'bot',message: data.answer}
    setChatMessage(prevState=> [...prevState,msg])

   }).catch(err=>{
    console.log(err);
   })

   
}



const scrollToBottom = () => {
  messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
}


useEffect(scrollToBottom,[chatmessage,toggle])

  return (
      <>
     <ChatBox className={toggle ? `open` : ''}>
      <ChatHeader>
       <Avatar>
        <img src={AI} style={{height: '100%',width: '100%', objectFit : 'contain'}} />
       </Avatar>
       <HeaderText>ChatBot AI</HeaderText>
       <AiOutlineCloseCircle onClick={()=>setToggle(!toggle)} style={{width: '25px',height: '25px',color: 'white',cursor: 'pointer'}} />
      </ChatHeader>
     <ChatBody>
         {
          chatmessage.map(({type,message},i)=>(
            <ChatMessage key={i} type={type} message={message} />
          ))
         }
         
       <div ref={messagesEndRef} />
     {  loading && <TypeAnimation
            cursor={false}
            sequence={['Typing..', 1000, '']}
            wrapper="p"
         />}
     </ChatBody>

     <ChatFooter>
        <form style={{display:'flex'}} onSubmit={handleSubmit}>
        <ChatInput  value={userinput} onChange={(e)=>setUserInput(e.target.value)} placeholder='Type a message...'/>
        <SendBtn type='submit' disabled={userinput == ''} onClick={handleSubmit}><AiOutlineSend color = '#FFE300' style={{width: '25px',height: '25px',}}  /></SendBtn>
        </form>
     </ChatFooter>
     </ChatBox>
    
    <ChatHead onClick={()=>setToggle(!toggle)}>
    
     <AiOutlineMessage color='white' style={{width: '40px',height: '40px',zIndex : 1000}}/>
    </ChatHead>
    </>
  )

  
}

const ChatMessage = ({type,message}) => {
  let chatstyles;
  if(type=='user'){
    chatstyles = {
      alignSelf: 'end',
      marginRight: '20px'
    }
  } else{
    chatstyles = {alignSelf: 'start',marginLeft: '20px'}
  }

  return (
    <>
   <span style={chatstyles}>{type =='bot' ? 'Bot' : 'You'}</span>
    <ChatMsg className={type== 'user' ? 'user' : ''} type={type}>{message}</ChatMsg>
    
    </>
  
  )
}

export default Chat