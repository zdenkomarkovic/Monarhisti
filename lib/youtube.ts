// Fetch video details from YouTube oEmbed API
export async function getYouTubeVideoTitle(videoId: string): Promise<string> {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      throw new Error('Failed to fetch video data');
    }

    const data = await response.json();
    return data.title || 'Untitled Video';
  } catch (error) {
    console.error(`Error fetching title for video ${videoId}:`, error);
    return 'Video';
  }
}

// Fetch multiple video titles
export async function getYouTubeVideoTitles(videoIds: string[]): Promise<Record<string, string>> {
  const titles: Record<string, string> = {};

  await Promise.all(
    videoIds.map(async (id) => {
      titles[id] = await getYouTubeVideoTitle(id);
    })
  );

  return titles;
}
