import EnrollStep from "../(comp-howto)/EnrollStep";

type Props = {};

const Howto = (props: Props) => {
  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full">
      <div
        className="
      w-full sm:w-4/5 mx-auto px-2 sm:px-0 py-10 sm:py-8
      flex flex-col justify-center gap-8"
      >
        <h2 className="text-center">How do you Enroll?</h2>
        <div className="w-full flex justify-between gap-3">
          <EnrollStep
            number={1}
            header={"Class Timing"}
            description={
              "We conduct our classes every Saturday 12pm - 2pm. (class will be held if we meet expected quota)"
            }
          />
          <EnrollStep
            number={2}
            header={"Enrollment"}
            description={
              "You may register every week through our WhatsApp group. It will be a first come first serve basis."
            }
          />
          <EnrollStep
            number={3}
            header={"Start Painting"}
            description={
              "You will be provided art materials and painting reference. Learn by following and practicing."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Howto;
