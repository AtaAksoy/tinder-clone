import React from 'react'
import './Chats.css'
import Chat from './Chat'
const Chats = () => {
    return (
        <div className="chats">
            <Chat name="Mark" message="Yo Whatsup!" timestamp="40sec ago" profilePicture="https://picsum.photos/seed/picsum/200/200" />
            <Chat name="Anastasya" message="Yoooooo!" timestamp="40sec ago" profilePicture="https://picsum.photos/seed/a/200/200" />
            <Chat name="Natasha" message="ILY!" timestamp="40sec ago" profilePicture="https://picsum.photos/seed/d/200/200" />
            <Chat name="Elon" message="How u doin!" timestamp="40sec ago" profilePicture="https://picsum.photos/seed/e/200/200" />
        </div>
    )
}

export default Chats