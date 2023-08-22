import { useState, useEffect } from "react";
import { LearnDataItem } from "./LearnDataItem";

const useLearnData = () => {
  const [allLearnData, setAllLearnData] = useState<LearnDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/learning-questions/questions`)
      .then((response) => response.json())
      .then((data: LearnDataItem[]) => {
        setAllLearnData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return { allLearnData, loading };
};

export default useLearnData;