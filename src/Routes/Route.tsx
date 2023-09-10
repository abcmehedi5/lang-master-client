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
import UserPaymentData from "../Pages/UserDashboard/Profile/UserPayment/UserPaymentData";
import Error from "../Error/Error";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";
import Faq from "../Pages/Faq/Faq";
import SingleBlogCard from "../Pages/Blogs/SingleBlogCard";
import AddTopics from "../Pages/AdminDashboard/AddTopics";
import QuizLevel from "../Pages/UserDashboard/Quiz/QuizLevel";
import AdminRoute from "./AdminRoute";
import Shop from "./../Pages/UserDashboard/Shop/Shop";
import UpdateQuestion from "../Pages/AdminDashboard/UpdateQuestion";
import Books from "../Pages/UserDashboard/Books/Books";
import AddUnit from "../Pages/AdminDashboard/AddUnit/AddUnit";
import AllPayments from "../Pages/AdminDashboard/AllPayments";
import Support from "../Pages/Home/Support/Support";
import BoughtBooks from "../Pages/UserDashboard/BoughtBooks/BoughtBooks";
import AllBuyBook from "../Pages/AdminDashboard/AllBuyBook";
import Translator from "../Pages/Translator/Translator";
import Statistics from "../Pages/AdminDashboard/Statistics/Statistics";
import Certificate from "../Pages/Cartificate/Certificate";
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
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/translator",
        element: <Translator></Translator>,
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
        path: "/feedback",
        // element: <Review></Review>,
      },
      {
        path: "certificate",
        element: (
          <PrivateRoute>
            <Certificate></Certificate>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleBlogCard/:id",
        element: <SingleBlogCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/blog/${params.id}`),
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
        element: <QuizLevel></QuizLevel>,
      },
      {
        path: "mainquiz/:id",
        element: <Quizzes></Quizzes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/quizs/quiz/${params.id}`),
      },
      {
        path: "grammar",
        element: <Grammar></Grammar>,
      },

      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "userPaymentData",
        element: <UserPaymentData />,
      },
      {
        path: "books",
        element: <Books></Books>,
      },
      {
        path: "bought-books",
        element: <BoughtBooks></BoughtBooks>,
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
        <AdminRoute>
          <AdminDashboadLayout></AdminDashboadLayout>
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
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
        element: <AddTopics />,
      },
      {
        path: "update-question",
        element: <UpdateQuestion />,
      },
      {
        path: "add-unit",
        element: <AddUnit></AddUnit>,
      },
      {
        path: "allPayment",
        element: <AllPayments></AllPayments>,
      },
      {
        path: "allbuybook",
        element: <AllBuyBook></AllBuyBook>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default router;
