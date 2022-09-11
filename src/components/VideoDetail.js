const VideoDeatils = ({ video }) => {
  if (!video) {
    return <div>loading!!</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="youtube video"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDeatils;
