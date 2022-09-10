import { createContext } from "@builder.io/qwik";
import { FavStoryDto } from "./services/NewsService";

export interface AppContextType {
  favs: FavStoryDto[];
}
export const AppContext = createContext<AppContextType>("app-context");
