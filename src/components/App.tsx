import { MoreButton } from "./MoreButton.js";

const App = () => {
  return (
    <div className="App">
      <h2>
        Infinite scroll React Server Components using{" "}
        <a href="https://waku.gg/">Waku</a>
      </h2>
      <p>
        You can find the code explanation{" "}
        <a href="https://dev.to/hadi/infinite-scroll-in-firebase-firestore-and-react-js-55g3">
          here
        </a>
      </p>
      <MoreButton />
    </div>
  );
};

export default App;