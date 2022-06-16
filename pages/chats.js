import React, {useState, useEffect, useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const ChatEngine = dynamic(() => import('react-chat-engine').then((module) => module.ChatEngine));

const MessageFormSocial = dynamic(()=>
import('react-chat-engine').then((module)=>module.MessageFormSocial)
)

export default function Chats() {
  const {username, password} = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    if(typeof document != null){
      setShowChat(true)
    }
  })

  useEffect(()=>{
    if(username.length ==0 || password.length === 0) router.push('/')
  })

  if(!showChat) return <div/>

  return( <div className="background">
    <div className="shadow">
      <ChatEngine
        height='calc(100vh-200px)'
        projectID='2bc7fd76-b185-4cc3-9c9d-ef61d6a3d544'
        userName={username}
        userSecret={password}
        renderNewMessageForm={()=><MessageFormSocial/>}
      />
    </div>
  </div>);
}
