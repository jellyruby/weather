import "./app.postcss";
import App from "./App.svelte";
import Header from "./Header.svelte";

const app = new App({
  target: document.getElementById("app"),
});


//다음과 같이 사용하면  leftmenu등을 넣을 수 있을 것으로 보인다
const header = new Header({
  target: document.getElementById("header"),
});

export default app;

