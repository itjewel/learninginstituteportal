'use client'
import React from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

async function fetchVideos(): Promise<Video[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCXXXXXXXXXXXXXXXX"; // Replace with your channel ID

  // Fetch the uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();
  const uploadsPlaylistId =
    channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    return [];
  }

  // Fetch videos from the uploads playlist
  const videosRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
  );
  const videosData = await videosRes.json();

  return videosData.items.map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
  }));
}

const TutorialsPage = async () => {
  const videos = await fetchVideos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialsPage;
