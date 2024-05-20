import CaloriesDisplay from "./CaloriesDisplay";
import { useActivity } from "../hooks/useActivity";

const CalorieTracker = () => {
  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity();

  //Contadores

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Calorie Summary:
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay calories={caloriesConsumed} text="Consumed" />
        <CaloriesDisplay calories={caloriesBurned} text="Exercise" />
        <CaloriesDisplay calories={netCalories} text="Difference" />
      </div>
    </>
  );
};

export default CalorieTracker;
