import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import LearningLayout from "../Layouts/LearningLayout";
import Learning from "../Pages/UserDashboard/Learning/Learning";
import LeaderBoard from "../Pages/UserDashboard/LeaderBoard/LeaderBoard";
import Grammar from "../Pages/UserDashboard/Grammar/Grammar";
import Profile from "../Pages/UserDashboard/Profile/Profile";
import Quizzes from "../Pages/UserDashboard/Quiz/Quizzes";
import LearnLesson from "../Pages/UserDashboard/LearnLesson/LearnLesson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "user-dashboard",
    element: <LearningLayout></LearningLayout>,
    children: [
      {
        path: "learning",
        element: <Learning></Learning>,
      },
      {
        path: "learning/:id",
        element: <LearnLesson></LearnLesson>,
        loader: ({ params }: any) => fetch(`/learn.json/${params.id}`),
      },
      {
        path: "leader-board",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "quiz",
        element: <Quizzes></Quizzes>,
      },
      {
        path: "grammar",
        element: <Grammar></Grammar>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
