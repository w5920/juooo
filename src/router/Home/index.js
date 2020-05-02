import Activity from "../../views/Home/Activity";
import Calendar from "../../views/Home/Calendar";
import Cardproduct from "../../views/Home/Cardproduct";
import Integral from "../../views/Home/Integral";
import Plus from "../../views/Home/Plus";
import Reset from "../../views/Home/Reset";
import Search from "../../views/Home/Search";
import SelectCity from "../../views/Home/SelectCity";
import ShowDetail from "../../views/Home/ShowDetail";
import TourShowInfo from "../../views/Home/TourShowInfo";
import Vip from "../../views/Home/Vip";
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
    path: "/Plus",
    component: Plus,
  },
  {
    path: "/SelectCity",
    component: SelectCity,
  },
  {
    path: "/Vip",
    component: Vip,
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
];
