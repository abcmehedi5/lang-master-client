import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import LearningLayout from "../Layouts/LearningLayout";
import Learning from "../Pages/UserDashboard/Learning/Learning";
import LeaderBoard from "../Pages/UserDashboard/LeaderBoard/LeaderBoard";
import Grammar from "../Pages/UserDashboard/Grammar/Grammar";
import Profile from "../Pages/UserDashboard/Profile/Profile";
import Quizzes from "../Pages/UserDashboard/Quiz/Quizzes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LearnLesson from "../Pages/UserDashboard/LearnLesson/LearnLesson";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import UserManage from "../Pages/AdminDashboard/UserManage/UserManage";
import AdminDashboadLayout from "../Layouts/AdminDashboadLayout";
import QuestionsForLearn from "../Pages/UserDashboard/QuestionsForLearn/QuestionsForLearn";
import AddQuizAdmin from "../Pages/AdminDashboard/AddQuizAdmin";
import Error from "../Error/Error";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Singup></Singup>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/singleBlogCard/:id",
        element: <SingleBlogCard/>,
        loader:({params}) => fetch(`http://localhost:5000/blogs/blog/${params.id}`)
      },
    ],
  },
  // user dashboard
  {
    path: "user-dashboard",
    element: (
      <PrivateRoute>
        <LearningLayout></LearningLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "learning",
        element: (
          <PrivateRoute>
            <Learning></Learning>
          </PrivateRoute>
        ),
      },
      {
        path: "learning/:id",
        element: <LearnLesson></LearnLesson>,
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

  // questions page
  {
    path: "learning/:id/lesson/:lessonNumber",
    element: <QuestionsForLearn></QuestionsForLearn>,
  },

  // admin dashboard
  {
    path: "admin-dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboadLayout></AdminDashboadLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-manage",
        element: <UserManage></UserManage>,
      },
      {
        path: "add-quize",
        element: <AddQuizAdmin></AddQuizAdmin>,
      },
      {
        path: "add-topics",
        element: <AddTopics></AddTopics>,
      },
      {
        path: "add-notification",
        element: <AddNotification></AddNotification>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default router;
