import YouTube from "react-youtube";

/**
 * @see https://www.youtube.com/watch?v=K1F9eks9X-A
 * @description https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
 */
const videoId = "K1F9eks9X-A";

const VideoSection = () => {
  return (
    <div className="py-[32px] pc:py-[48px] w-full aspect-[390/276] pc:aspect-[1200/463]">
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0, //자동재생 x
            rel: 0, //관련 동영상 표시하지 않음
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        className="max-w-container w-full h-full"
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </div>
  );
};

export default VideoSection;
