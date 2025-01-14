// import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useActivity } from "../hooks/useActivity";

const ActivityList = () => {
  const { state, dispatch, categoryName, isEmptyActivities } = useActivity();
  // console.log("activities", activities);

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Food and Activities
      </h2>
      {isEmptyActivities ? (
        <p className="text-center my-5">There are no activities yet...</p>
      ) : (
        state.activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex justify-between  rounded-md shadow-lg"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold rounded-md ${
                  activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                } `}
              >
                {categoryName(+activity.category)}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.name}</p>
              <p className="font-black text-4xl text-lime-500">
                {activity.calories}
                {""} <span>Calories</span>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <button>
                <PencilSquareIcon
                  className="h-8 w-8 text-gray-800 active:scale-95"
                  onClick={() =>
                    dispatch({
                      type: "set-activeId",
                      payload: { id: activity.id },
                    })
                  }
                />
              </button>
              <button>
                <XCircleIcon
                  className="h-8 w-8 text-red-500 active:scale-95"
                  onClick={() =>
                    dispatch({
                      type: "delete-activity",
                      payload: { id: activity.id },
                    })
                  }
                />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ActivityList;
