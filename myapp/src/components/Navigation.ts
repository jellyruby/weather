
import Main from "../routes/Main.svelte";
import Detail from "../routes/Detail.svelte";
import WeathetGallery from "../routes/Gallery.svelte";

export const PageRouterInit = [
  {index: 0, url : '/', pageComponent : Main},
  {index: 1, url : '/Detail', pageComponent : Detail},
  {index: 2, url : '/Gallery', pageComponent : WeathetGallery},
];

 

