type Props = {
  title: string;
  sub1: string;
  sub2: string;
};

const Detail = ({ title, sub1, sub2 }: Props) => {
  return (
    <div
      className="bg-white w-full h-full px-4 py-8 rounded-md
    flex flex-col gap-4"
    >
      <h3>{title}</h3>
      <p>{sub1}</p>
      <p>{sub2}</p>
    </div>
  );
};

export default Detail;
