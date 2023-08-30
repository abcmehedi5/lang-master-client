// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AddTopicData from "./AddTopicData";

const AddTopics: React.FC = () => {

  return (
    <>
      <Helmet>
        <title> Add Topics | Lang Master </title>
      </Helmet>
      <div className="p-4 py-8 lg:w-11/12">
        <AddTopicData />
      </div>
    </>
  );
};

export default AddTopics;
