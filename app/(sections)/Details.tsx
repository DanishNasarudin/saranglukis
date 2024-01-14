import Link from "next/link";

type Props = {};

const Details = (props: Props) => {
  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
      w-full sm:w-4/5 mx-auto px-2 sm:px-0 py-10 sm:py-16
      flex flex-col justify-center gap-8"
        id="enroll-final"
      >
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-center leading-none">Ready to Enroll?</h2>
            <p>
              Simply contact us through Facebook Messenger. <br />
              We will invite you to our WhatsApp group for you to self register
              every week.
            </p>
          </div>
          <Link href={"/"} className="w-fit mx-auto">
            <button className="py-2 px-4 sm:py-3 sm:px-6 border-black border-[1px] rounded-lg w-fit mx-auto sm:mx-0 mt-4">
              <p className="text-[10px] sm:text-sm">
                <b>Send us a message!</b>
              </p>
            </button>
          </Link>
        </div>
        <div
          className="
        w-full mx-auto mt-2
        flex flex-col sm:flex-row justify-between gap-3"
        >
          <div
            className="bg-white w-full px-6 py-10 rounded-md 
    flex flex-col gap-4"
          >
            <svg height="20" width="40">
              <circle cx="10" cy="10" r="5" fill="rgb(156 163 175)" />
              <circle cx="25" cy="10" r="5" fill="rgb(209 213 219)" />
            </svg>
            <h3>Time</h3>
            <p>
              Every Saturday <br />
              11:30pm - 1:30pm
            </p>
            <p className="text-zinc-600 font-light">
              (class will be held if we meet expected quota)
            </p>
          </div>
          <div
            className="bg-orange-300  w-full px-6 py-10 rounded-md
    flex flex-col gap-4"
          >
            <svg height="20" width="40">
              <circle cx="10" cy="10" r="5" fill="white" />
              <circle cx="25" cy="10" r="5" fill="white" />
            </svg>
            <h3>Price</h3>
            <p>Choose your prefered Canvas:</p>
            <p className="text-zinc-600 font-bold">
              RM45/class (Canvas) <br />
              RM55/class (Tote Bag)
            </p>
          </div>
          <div
            className="bg-white w-full px-6 py-10 rounded-md
    flex flex-col gap-4"
          >
            <svg height="20" width="40">
              <circle cx="10" cy="10" r="5" fill="rgb(156 163 175)" />
              <circle cx="25" cy="10" r="5" fill="rgb(209 213 219)" />
            </svg>
            <h3>Location</h3>
            <p>Taman Sri Angsana Hilir, Kuala Lumpur.</p>
            <p className="text-zinc-600 font-light">
              (obtain details through messenger)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
