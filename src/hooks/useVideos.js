import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    setVideo(response.data.items);
  };

  return [video, search]
};

export default useVideos;
