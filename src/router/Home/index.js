import Activity from "../../views/Home/Activity";
import Calendar from "../../views/Home/Calendar";
import Cardproduct from "../../views/Home/Cardproduct";
import Integral from "../../views/Home/Integral";
import Reset from "../../views/Home/Reset";
import Search from "../../views/Home/Search";
import SelectCity from "../../views/Home/SelectCity";
import ShowDetail from "../../views/Home/ShowDetail";
import ShowLibrary from "../../views/Home/ShowLibrary";
import TourShowInfo from "../../views/Home/TourShowInfo";
export default [
  {
    path: "/Activity",
    component: Activity,
  },
  {
    path: "/Calendar",
    component: Calendar,
  },
  {
    path: "/Cardproduct",
    component: Cardproduct,
  },
  {
    path: "/Integral",
    component: Integral,
  },
  {
    path: "/SelectCity",
    component: SelectCity,
  },
  {
    path: "/ShowDetail/:id.html",
    component: ShowDetail,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/tourShowInfo/:tourId.html",
    component: TourShowInfo,
  },
  {
    path: "/Reset/:id.html",
    component: Reset,
  },
  {
    path: "/ShowLibrary/:category_id.html",
    component: ShowLibrary,
  },
];
