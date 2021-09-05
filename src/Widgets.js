import { Search } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"></Search>
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1434173909163708422"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ManUtd"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/profile.php?id=100009589212408%22https%3A%2F%2Ffacebook.com%2FjayakrishnanMurali"}
                    options={{ text: "#reactjs is awesome", via: "Jkay" }}
                />
            </div>
        </div>
    )
}

export default Widgets
