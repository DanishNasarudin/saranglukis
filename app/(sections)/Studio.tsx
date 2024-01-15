import studio1 from "@/public/studio-1.webp";
import studio2 from "@/public/studio-2.webp";
import studio3 from "@/public/studio-3.webp";
type Props = {};

const Studio = (props: Props) => {
  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
  w-full sm:w-4/5 mx-auto px-2 sm:px-0 py-10 sm:py-16
  flex flex-col gap-8
  "
        id="studio"
      >
        <div className="max-w-[500px] w-full mx-auto text-center">
          <h2>The SarangLukis “Studio”.</h2>
          <p>We ensure a spacious area for our students.</p>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="bg-accent w-full h-[250px] rounded-md overflow-hidden">
              <img
                src={studio1.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-accent w-full h-[250px] rounded-md overflow-hidden">
              <img
                src={studio2.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="right hidden sm:block max-w-[250px] bg-accent w-full rounded-md overflow-hidden">
            <img
              src={studio3.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
