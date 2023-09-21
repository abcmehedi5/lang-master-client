import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormValue = {
  Level: string;
  questionData: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
};

const AddQuestion: any = () => {
  const { register, handleSubmit, control } = useForm<FormValue>({
    defaultValues: {
      Level: " ",
      questionData: [
        { question: "", options: ["", "", "", ""], correctAnswer: "" },
      ],
    },
  });

  const onSubmit: SubmitHandler<FormValue> = (data: any) => {
    // Post the form data to your server here
    console.log(data);
  };

  return (
    <div className="mx-auto border p-5 rounded-lg m-4 lg:m-10 lg:p-10 shadow-lg bg-slate-100">
      <h2 className="text-center font-semibold text-2xl text-[#21bbd3] ">
        Add Quiz
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* level */}
        <div>
          <label
            htmlFor="question"
            className="block form-control text-sm font-medium"
          >
            Level
          </label>
          <Controller
            name="Level"
            control={control}
            render={({ field }: any) => (
              <Select
                {...field}
                options={[
                  { value: "easy", label: "Easy" },
                  { value: "normal", label: "Normal" },
                  { value: "hard", label: "Hard" },
                ]}
              />
            )}
          />
        </div>

        {/* questionData question */}
        <div>
          <label
            htmlFor="question"
            className="block form-control text-sm font-medium"
          >
            QuestionData: Question
          </label>
          <input
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            defaultValue="test"
            id="question"
            {...register("questionData.0.question")}
          />
        </div>

        <h3 className="text-sm font-medium">Question Data:</h3>
        <div className="flex gap-3">
          {/* questionData options One */}
          <div className="w-1/3">
            <label
              htmlFor="optionsOne"
              className="block form-control text-sm font-medium"
            >
              Options One
            </label>
            <input
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              defaultValue="test"
              id="optionsOne"
              {...register("questionData.0.options.0")}
            />
          </div>
          {/* questionData options Two*/}
          <div className="w-1/3">
            <label
              htmlFor="optionsTwo"
              className="block form-control text-sm font-medium"
            >
              Options Two{" "}
            </label>
            <input
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              defaultValue="test"
              id="optionsTwo"
              {...register("questionData.0.options.1")}
            />
          </div>
          {/* questionData options Three*/}
          <div className="w-1/3">
            <label
              htmlFor="optionsThree"
              className="block form-control text-sm font-medium"
            >
              Options Three
            </label>
            <input
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              defaultValue="test"
              id="optionsThree"
              {...register("questionData.0.options.2")}
            />
          </div>
        </div>

        {/* correctAnswer*/}
        <div>
          <label
            htmlFor="correctAnswer"
            className="block form-control text-sm font-medium"
          >
            correctAnswer
          </label>
          <input
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            defaultValue="test"
            id="correctAnswer"
            {...register("questionData.0.correctAnswer")}
          />
        </div>

        {/* submit */}
        <button
          type="submit"
          className="btn bg-[#088395] hover:bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
