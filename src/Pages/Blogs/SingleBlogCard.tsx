import { useLoaderData } from "react-router-dom";

const SingleBlogCard = () => {
  const data: any = useLoaderData();

  return (
    <div
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className="card px-4 py-4 lg:w-2/3 mx-auto glass my-8 lg:my-12"
    >
      <figure>
        <img
          src={data.image}
          alt="car!"
          className="w-full h-[500px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{data.title}</h2>
        <h3 className="text-xl text-lime-600 font-semibold"> {data.name}</h3>
        <p>{data.description}</p>
        <p className="text-yellow-600">Likes: {data.like}</p>
        <p>Category: {data.category}</p>

        {/* Check if comments exist and if it's an array before mapping */}
        <div className="text-lg">
          {Array.isArray(data.comment) &&
            data.comment.map((singleComment: any, index: number) => (
              <div key={index}>
                <p className="indicator-item badge badge-primary">
                  User: {singleComment.user}
                </p>
                <p>Comment: {singleComment.text}</p>
                <p>Timestamp: {singleComment.timestamp}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
