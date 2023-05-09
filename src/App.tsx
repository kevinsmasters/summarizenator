import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";
type Props = {};

const App = (props: Props) => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
