// @ts-ignore
import { logo } from "../assets";
type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/kevinsmasters")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summizenatator, an open-source article
        summarizeranator that transforms the lenghthy articles into clear and
        conscise summaries
      </h2>
    </header>
  );
};

export default Hero;
