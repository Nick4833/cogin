import { Player } from "@lottiefiles/react-lottie-player";
import error from "../lotties/404.json";

const Error = () => {
  return (
    <div className="flex flex-col gap-8 items-center p-6">
      <Player autoplay loop src={error} style={{ height: "500px" }}></Player>
      <div className="flex flex-col text-center gap-5">
      <p className="font-medium text-3xl">Oops! The page you're finding doesn't seem to exist.</p>
      <p>(Unless you're looking for the 404 page. In which case, you've found it.🎉)</p>
      </div>
      <a href="/">
      <button className="w-[350px] md:w-[320px] font-medium text-xl p-3 rounded-lg bg-yellow-300 text-black transition-all hover:translate-y-[-5px]">
        Back to Home Page
      </button>
      </a>
    </div>
  );
};

export default Error;
