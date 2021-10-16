import LoginPage from './pages/loginPage/LoginPage';
import HomePage from './pages/homePage/HomePage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ProfilePage from './pages/user/profiles/ProfilePage';
import ScheduleListPage from './pages/schedules/scheduleListPage/ScheduleListPage';
import TutionFeePage from './pages/tutionFeePage/TutionFeePage';
import PersonList from './pages/personList/PersonList';
import RatingPage from './pages/ratingPage/RatingPage';
import NewClassPage from './pages/newClassPage/NewClassPage';

export const tutorRoute = ["/profile", "/student-list", "/rating", "/tution-fee", "/", "/teach-schedule", "/new-class-list"];
export const studentRoute = ["/profile", "/tutor-list", "/tution-fee", "/", "/study-schedule"];

const routes = [
  // {
  //   path: '/',
  //   component: HomePage,
  //   exact: true,
  // },
  // {
  //   path: '/login',
  //   component: LoginPage,
  //   exact: false,
  // },
  // {
  //   path: '/register',
  //   component: RegisterForm,
  //   exact: true,
  // },
  {
    path: "/",
    name: "Trang chủ",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/user",
    exact: true
  },
  {
    path: "/teach-schedule",
    name: "Lịch dạy",
    icon: "ni ni-calendar-grid-58 text-blue",
    component: ScheduleListPage,
    layout: "/user",
  },
  {
    path: "/study-schedule",
    name: "Lịch học",
    icon: "ni ni-calendar-grid-58 text-blue",
    component: ScheduleListPage,
    layout: "/user",
  },
  {
    path: "/student-list",
    name: "Học sinh",
    icon: "fas fa-user-graduate text-orange",
    component: PersonList,
    layout: "/user",
  },
  {
    path: "/tutor-list",
    name: "Gia sư",
    icon: "fas fa-user-graduate text-orange",
    component: PersonList,
    layout: "/user",
  },
  {
    path: "/rating",
    name: "Đánh giá",
    icon: "fas fa-comments text-green",
    component: RatingPage,
    layout: "/user",
  },
  {
    path: "/new-class-list",
    name: "Tìm lớp mới",
    icon: "fas fa-comments text-green",
    component: NewClassPage,
    layout: "/user",
  },
  // {
  //   path: "/looking-for-tutor",
  //   name: "Đăng ký tìm gia sư",
  //   icon: "ni ni-notification-70 text-green",
  //   component: LookingForTutorPage,
  //   layout: "/user",
  // },
  {
    path: "/tution-fee",
    name: "Học phí tham khảo",
    icon: "fas fa-dollar-sign text-orange",
    component: TutionFeePage,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Thông tin cá nhân",
    icon: "ni ni-single-02 text-yellow",
    component: ProfilePage,
    layout: "/user",
    exact: false
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Đăng nhập",
    icon: "ni ni-key-25 text-info",
    component: LoginPage,
    layout: "/auth",
    exact: true
  },
  {
    path: "/register",
    name: "Đăng ký",
    icon: "ni ni-circle-08 text-pink",
    component: RegisterPage,
    layout: "/auth",
    exact: true
  },
];

export default routes;