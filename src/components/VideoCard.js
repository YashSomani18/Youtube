import React from 'react'

const VideoCard = ({ info = {} }) => {
    const { snippet = {}, statistics = {} } = info;
    const { channelTitle = "", title = "", thumbnails = {} } = snippet;

    const thumbnailUrl = thumbnails.medium ? thumbnails.medium.url : "";

    return (
        <div className="p-3 m-4 w-72 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-gray-100  transform hover:-translate-y-1 transition-transform duration-200">
          <img className="w-full h-40 rounded-lg object-cover mb-4" alt="thumbnail" src={thumbnailUrl} />
          <h4 className="font-bold text-lg mb-2 truncate">{title}</h4>
          <p className="text-gray-600 mb-1">{channelTitle}</p>
          <p className="text-gray-500 text-sm">{statistics.viewCount} views</p>
        </div>
    );
};

export default VideoCard
