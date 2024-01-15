type Props = {
  number: number;
  header: string;
  description: string;
};

const EnrollStep = ({ number, header, description }: Props) => {
  return (
    <div className="xs:max-w-[250px] w-full flex flex-col gap-4 xs:gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <div className="aspect-[1/1] w-10 text-center bg-accent flex items-center justify-center rounded-md text-primary">
          <h3>
            <b>{number}</b>
          </h3>
        </div>
        <h3>{header}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default EnrollStep;
