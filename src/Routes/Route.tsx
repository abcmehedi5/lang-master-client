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
import Books from "../Pages/UserDashboard/Books/Books";
import AddUnit from "../Pages/AdminDashboard/AddUnit/AddUnit";
import AllPayments from "../Pages/AdminDashboard/AllPayments";
import Support from "../Pages/Home/Support/Support";
import BoughtBooks from "../Pages/UserDashboard/BoughtBooks/BoughtBooks";
import AllBuyBook from "../Pages/AdminDashboard/AllBuyBook";
import Translator from "../Pages/Translator/Translator";
import Statistics from "../Pages/AdminDashboard/Statistics/Statistics";
import Certificate from "../Pages/Cartificate/Certificate";
import AllBooks from "../Pages/AdminDashboard/AllBooks";
import AddBooks from "../Pages/AdminDashboard/AddBooks";
import AllQuestion from "../Pages/AdminDashboard/AllQuestion/AllQuestion";
import AddLesson from "../Pages/AdminDashboard/AllQuestion/AddLesson";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import Introduction from "../Pages/Introduction/Introduction";

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
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/introduction",
        element: <Introduction></Introduction>,
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
        element: <SingleBlogCard />
      },
    ],
  },
  // user dashboard----------------------------------------------------------------------------------------
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
        element: (
          <PrivateRoute>
            <LearnLesson></LearnLesson>
          </PrivateRoute>
        ),
      },
      {
        path: "leader-board",
        element: (
          <PrivateRoute>
            <LeaderBoard></LeaderBoard>
          </PrivateRoute>
        ),
      },
      {
        path: "quiz",
        element: (
          <PrivateRoute>
            <QuizLevel></QuizLevel>
          </PrivateRoute>
        ),
      },
      {
        path: "mainquiz/:id",
        element: (
          <PrivateRoute>
            <Quizzes></Quizzes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/quizs/quiz/${params.id}`),
      },
      {
        path: "grammar",
        element: (
          <PrivateRoute>
            <Grammar></Grammar>
          </PrivateRoute>
        ),
      },

      {
        path: "shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "userPaymentData",
        element: (
          <PrivateRoute>
            <UserPaymentData />
          </PrivateRoute>
        ),
      },
      {
        path: "books",
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
      },
      {
        path: "bought-books",
        element: (
          <PrivateRoute>
            <BoughtBooks></BoughtBooks>
          </PrivateRoute>
        ),
      },
    ],
  },

  // questions page
  {
    path: "learning/:id/lesson/:lessonNumber",
    element: <QuestionsForLearn></QuestionsForLearn>,
  },

  // admin dashboard-----------------------------------------------------------------------------------------
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
        element: <AdminRoute><Statistics></Statistics></AdminRoute>,
      },
      {
        path: "user-manage",
        element: <AdminRoute><UserManage></UserManage></AdminRoute>,
      },
      {
        path: "add-quize",
        element: <AdminRoute><AddQuizAdmin></AddQuizAdmin></AdminRoute>,
      },
      {
        path: "add-topics",
        element: <AdminRoute><AddTopics /></AdminRoute>,
      },
      {
        path: "update-question",
        element: <AdminRoute><AllQuestion /></AdminRoute>,
      },
      {
        path: "add-unit",
        element: <AdminRoute><AddUnit></AddUnit></AdminRoute>,
      },
      {
        path: "allPayment",
        element: <AdminRoute><AllPayments></AllPayments></AdminRoute>,
      },
      {
        path: "allbuybook",
        element: <AdminRoute><AllBuyBook></AllBuyBook></AdminRoute>,
      },
      {
        path: "allbooks",
        element: <AdminRoute><AllBooks></AllBooks></AdminRoute>,
      },
      {
        path: "addBook",
        element: <AdminRoute><AddBooks></AddBooks></AdminRoute>,
      },
      {
        path: "add-lesson/:id",
        element: <AdminRoute><AddLesson></AddLesson></AdminRoute>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/learning-questions/questions/${params.id}`
          ),
      },
      // {
      //   path: "add-Lessons/add-quiz/:id",
      //   element: <AddQuizes></AddQuizes>,
      //   // loader: ({ params }) =>
      //   //   fetch(`http://localhost:5000/learning-questions/questions/${params.id}`),
      // },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default router;
