import { component$, useContext } from '@builder.io/qwik';
import { AppContext } from '../context';

export const Header = component$(() => {
  const state = useContext(AppContext);

  return <header class="main">
    <label>🖥️</label>
    <button>
      Favs
      {state.favs.length > 0 && <span>{state.favs.length}</span>}
    </button>
  </header>
});