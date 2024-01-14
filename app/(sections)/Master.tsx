import master from "@/public/master_pf.jpg";
import Link from "next/link";

type Props = {};

const Master = (props: Props) => {
  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
      w-full sm:w-4/5 mx-auto px-2 sm:px-0 py-10 sm:py-16
      flex items-center justify-between gap-8 flex-col-reverse sm:flex-row"
      >
        <div className="right max-w-[300px] w-full">
          <img
            src={master.src}
            alt={"master"}
            className="aspect-[6/7] object-cover rounded-md"
          />
        </div>
        <div className="left max-w-[400px] sm:max-w-[500px] w-full flex flex-col gap-2 text-center sm:text-left">
          <h1 className="leading-none py-2">
            Meet your One & Only{" "}
            <b className="text-accent text-[40px]">Master.</b>
          </h1>
          <p>
            A caring mother... I mean teacher that will guide you throughout
            your journey. Be fearless and burst through your imagination. If
            you’re stuck, she will be your hero.
          </p>
          <Link href={"#enroll-final"} className="w-fit mx-auto sm:mx-0">
            <button className="py-2 px-4 sm:py-3 sm:px-6 border-black border-[1px] rounded-lg w-fit mx-auto sm:mx-0 sm:mt-8 mt-4">
              <p className="text-[10px] sm:text-sm">
                <b>Enroll</b>
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Master;
