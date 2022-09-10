import { PropFunction, component$, $, useContext } from '@builder.io/qwik';
import { StoryDto } from '../services/NewsService';
import { AppContext } from '../context';

export interface StoryLineProps {
  story: StoryDto;
  onFavClick$: PropFunction<(story: StoryDto) => void>;
}

export const StoryLine = component$(({story, onFavClick$}: StoryLineProps) => {
  const state = useContext(AppContext);

  const addToFavs = $(() => {
    state.favs = [...state.favs, {
      url: story.url,
      title: story.title,
      details: "" 
    }];
    onFavClick$(story);
  })

  return (
    <li class={story.selected ? "sel" : ""}>
      <h3>{story.title}</h3>
      <p>{story.text}</p>
      <footer>
        <span>{story.score}</span>
        <a href={story.url} target="new">Link</a>
        <button class={"love"} onClick$={addToFavs}>❤️</button>
      </footer>
    </li>
  )
});
  