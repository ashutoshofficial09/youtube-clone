import React from "react";
import "./recommended.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommended">
      <h2>RecommendedVideos</h2>
      <div className="recommended-videos-list">
        <VideoCard
          image={
            "https://i.ytimg.com/vi/lDqWH8VwU5c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd7fe8QoZT76S-ggAK910sMbugsQ"
          }
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLSc7IUG42KqMNCPmSC15JZi5YfxCv-uIyUwZh28oQ=s176-c-k-c0x00ffffff-no-rj"
          }
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
