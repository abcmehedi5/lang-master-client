// import { useEffect, useState } from "react";
import SingleUnitCard from "./SingleUnitCard";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import { Helmet } from "react-helmet-async";

const Learning = () => {
  // const [unitData, setUnitData] = useState<LearnDataItem[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/learn.json");
  //       const learnData = await response.json();
  //       setUnitData(learnData);
  //     } catch (error) {
  //       console.error("error fetching learning data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(unitData);

  const { allLearnData } = useLearnData();
  console.log(allLearnData);

  return (
    <>
      <Helmet>
        <title> Learning | Lang Master </title>
      </Helmet>
      <div className="px-4 py-8 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allLearnData.map((singleUnit) => (
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
