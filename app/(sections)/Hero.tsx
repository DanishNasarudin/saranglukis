import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
      w-full sm:w-4/5 mx-auto px-2 sm:px-0 py-10 sm:py-16
      flex items-center justify-between gap-4 flex-col-reverse sm:flex-row"
      >
        <div className="left max-w-[400px] sm:max-w-[500px] w-full flex flex-col gap-2 text-center sm:text-left">
          <h1 className="leading-none py-2">
            Your <b className="text-accent">Canvas</b> awaits <br /> your story
            with Acrylic.
          </h1>
          <p>
            Instantly hold the brush, start painting and let your imagination
            soar. You will be taught according to your own choice of painting
            reference.
          </p>
          <Link href={"#positions"}>
            <button className="py-2 px-4 sm:py-3 sm:px-6 border-black border-[1px] rounded-lg w-fit mx-auto sm:mt-8 mt-4">
              <p className="text-[10px] sm:text-sm">
                <b>Learn More</b>
              </p>
            </button>
          </Link>
        </div>
        <div className="right bg-red-300 max-w-[300px] w-full h-[250px]">
          picture
        </div>
      </div>
    </div>
  );
};

export default Hero;
