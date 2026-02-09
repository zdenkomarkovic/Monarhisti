import { YOUTUBE_VIDEOS } from "@/lib/constants";
import { getYouTubeVideoTitles } from "@/lib/youtube";
import YouTubeEmbed from "./YouTubeEmbed";

export default async function VideoSection() {
  // Fetch real titles from YouTube
  const videoIds = YOUTUBE_VIDEOS.map((v) => v.id);
  const titles = await getYouTubeVideoTitles(videoIds);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {YOUTUBE_VIDEOS.map((video) => (
            <div key={video.id} className="flex flex-col">
              <YouTubeEmbed videoId={video.id} title={titles[video.id]} />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
                {titles[video.id]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
