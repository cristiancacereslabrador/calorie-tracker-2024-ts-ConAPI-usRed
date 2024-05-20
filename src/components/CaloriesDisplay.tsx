type CaloriesDisplayProps = {
  calories: number;
  text: string;
};

const CaloriesDisplay = ({ calories, text }: CaloriesDisplayProps) => {
  return (
    <p className="text-white text-2xl font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      {" "}
      <span className="font-black text-6xl text-orange"> {calories}</span>
      {text}
    </p>
  );
};

export default CaloriesDisplay;
