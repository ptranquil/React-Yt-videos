import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(singleVideo => {
        return (
            <VideoItem 
                key = {singleVideo.etag} 
                video = {singleVideo} 
                onVideoSelect = {onVideoSelect} 
            />
        )
    })
    return(
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList