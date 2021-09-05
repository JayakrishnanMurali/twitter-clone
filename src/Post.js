import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src= "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Jkay <span className="post__headerSpecial">@jkay </span> </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Not Working" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small"></ChatBubbleOutline>
                    <Repeat fontSize="small"></Repeat>
                    <FavoriteBorder fontSize="small"></FavoriteBorder>
                    <Publish fontSize="small"></Publish>
                </div>
            </div>
        </div>
    )
}

export default Post
