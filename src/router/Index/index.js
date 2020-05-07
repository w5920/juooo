import Eticket from "../../views/Index/Eticket";
import Home from "../../views/Index/Home";
import Myjuooo from "../../views/Index/Myjuooo";
import TheatreList from "../../views/Index/TheatreList";

export default [
  {
    path: "/TheatreList",
    component: TheatreList,
  },
  {
    path: "/Eticket",
    component: Eticket,
    // meta: { isAuthorization: true },
  },
  {
    path: "/Myjuooo",
    component: Myjuooo,
    // meta: { isAuthorization: true },
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
