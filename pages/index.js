import React, {useContext, useState} from "react";
import {Context} from '../context'
import { useRouter } from "next/router";
import axios from 'axios'

export default function Auth() {
  const {username, setUsername, password, setPassword} = useContext(Context)
  const router = useRouter()
  function onSubmit(e){
    e.preventDefault()
    if(username.length === 0 || password.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
    {
      username:username,
      secret:password
    },
    {headers:{"Private-key":'685acd8a-21d3-41e6-863c-7a6bbd83aa44'}}
    ).then(r=>router.push('/chats'))
  }
  return( <div className="background">
    <div className="auth-container">
      <form className="auth-from"
      onSubmit={(e)=>onSubmit(e)}
      >
        <div className="auth-title">
          Sign In
        </div>
        <div className="input-container">
            <input
              className="text-input"
              placeholder="username"
              onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="input-container">
            <input
              className="text-input"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              type='password'
            />
        </div>
        <button 
        type="submit"
        className="submit-button"
        >
          Login/Sign Up
        </button>
      </form>
    </div>
  </div>)
}
