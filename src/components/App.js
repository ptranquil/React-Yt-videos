import React, {useState, useEffect} from "react";
import SeachBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDeatils from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App  = () => {
  // const [video, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [video, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(video[0])
  }, [video])

  // setSelectedVideo(response.data.items[0])
  // useEffect(() => {
  //   onSearchSubmit('building')
  // },[])

  // const onSearchSubmit = async (searchTerm) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: searchTerm,
  //     },
  //   });
  //   setVideo(response.data.items)
  //   setSelectedVideo(response.data.items[0])
  // };


  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SeachBar onSearchSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDeatils video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={video}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
