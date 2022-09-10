const Path = "https://hacker-news.firebaseio.com/v0";
const StoriesCount = 10;

export interface FavStoryDto {
  url: string;
  title: string;
  details: string;
}

export interface StoryDto {
  id: number;
  title: string;
  text: string;
  url: string;
  score: number;
  selected: boolean;
}

export async function getLatestNews(): Promise<StoryDto[]> {
  const response = await fetch(`${Path}/topstories.json`);
  const ids = await response.json();

  const promises = [] as Promise<Response>[];
  for (let idx = 0; idx < StoriesCount; idx++) {
    promises.push(fetch(`${Path}/item/${ids[idx]}.json`));
  }

  const responses = await Promise.all(promises);
  return await Promise.all(responses.map((it) => it.json()));
}
