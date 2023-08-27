import { useLoaderData } from "react-router-dom";

// interface Comment {
//   user: string;
//   text: string;
//   timestamp: string;
// }

// interface BlogData {
//   image: string;
//   name: string;
//   like: number;
//   description: string;
//   title: string;
//   category: string;
//   comment: Comment[];
// }

const SingleBlogCard = () => {
  const data:any = useLoaderData();

  return (
    <div className="card px-8 lg:w-2/3 mx-auto glass my-8 lg:my-12">
      <figure>
        <img src={data.image} alt="car!" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <h3 className="text-xl text-lime-600 font-semibold"> {data.name}</h3>
        <p>{data.description}</p>
        <p className="text-yellow-600">Likes: {data.like}</p>
        <p>Category: {data.category}</p>

        {/* Check if comments exist and if it's an array before mapping */}
        <div className="text-lg">
          {Array.isArray(data.comment) &&
            data.comment.map((singleComment:any, index:number) => (
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
