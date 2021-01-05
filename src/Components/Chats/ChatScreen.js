import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './Chats.css'
const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            username: 'ellen',
            image: 'https://picsum.photos/seed/picsum/200/200',
            message: 'Whatssaappp!!!'
        },
        {
            username: 'ellen',
            image: 'https://picsum.photos/seed/picsum/200/200',
            message: 'I like you!!!'
        },
        {
            message: 'Hello Ellen :) !!!'
        }
    ])
    const handleSend = (e) => {
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput('')
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/10/2020</p>
            {messages.map((message) => (
                message.username ? (
                    <div className="chatScreen__message">
                        <Avatar
                        className="chatScreen__image"
                        alt=""
                        src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ): (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                    
                ))}
                <form className="chatScreen__input">
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." type="text" className="chatScreen__inputField"></input>
                    <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen