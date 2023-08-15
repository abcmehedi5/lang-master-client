import { useEffect, useState } from "react";
import SingleUnitCard from "./SingleUnitCard";
export interface LearnDataItem {
  _id: string;
  unit: string;
  topic: string;
  lesson: string;
  points: string;
  progress: string;
  lessons: object;
  lessonNumber: string;
  lessonTitle: string;
}
const Learning = () => {
  const [unitData, setUnitData] = useState<LearnDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/learn.json");
        const learnData = await response.json();
        setUnitData(learnData);
      } catch (error) {
        console.error("error fetching learning data", error);
      }
    };

    fetchData();
  }, []);
  console.log(unitData);

  return (
    <>
      <div className="px-4 py-8 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {unitData.map((singleUnit) => (
          <SingleUnitCard
            key={singleUnit._id}
            singleUnit={singleUnit}
          ></SingleUnitCard>
        ))}
      </div>
    </>
  );
};

export default Learning;
