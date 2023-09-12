import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm, SubmitHandler } from "react-hook-form";

const AddLesson = () => {
  const { unitId } = useParams();

  const [axiaxiosSecures] = useAxiosSecure();

  const { data: question } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const res = await axiaxiosSecures.get(
        "/learning-questions/add-lesson/" + unitId
      );
      return res.data;
    },
  });

  type Inputs = {
    example: string;
    lessonNumber: string;
    lessonTitle: string;
    points: string;
    quiz: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="join">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 p-3 mx-3"
            placeholder="Lesson Number"
            {...register("lessonNumber", { required: true })}
          />
          {errors.lessonNumber && <span>This field is required</span>}

          <input
            className="border-2 p-3 mx-3"
            placeholder="Lesson Title"
            {...register("lessonTitle", { required: true })}
          />
          {errors.lessonTitle && <span>This field is required</span>}

          <input
            className="border-2 p-3 mx-3"
            placeholder="Points Number"
            {...register("points", { required: true })}
          />
          {errors.lessonTitle && <span>This field is required</span>}

          <input
            className="border-2 p-3 mx-3"
            placeholder="quiz question "
            {...register("quiz", { required: true })}
          />
          {errors.quiz && <span>This field is required</span>}

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>

      {/* lessons list */}

      <div>
        <h1 className="text-xl font-bold mb-6">Lessons</h1>
        <div className="overflow-x-auto border-2 rounded">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>#</th>
                <th>Lessons Title</th>
                <th>Lesson Number</th>
                <th>Total Quizs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Check if boughtBooks is defined before mapping */}
              {question?.lessons?.map((lesson: any, index: any) => (
                <tr key={lesson._id}>
                  <th>{index + 1}</th>
                  <th>{lesson?.lessonTitle}</th>
                  <th>{lesson?.lessonNumber}</th>
                  <th>{lesson?.quiz?.length}</th>
                  <th>
                    <Link to={"/add-quiz/" + lesson?.lessonTitle}>
                      <button className="btn btn-primary">Add Quiz</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
