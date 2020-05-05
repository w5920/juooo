import Group from "../../views/Home/Activity/Group";
import MyGroup from "../../views/Home/Activity/MyGroup";
export default [
  {
    path: "/activity",
    component: Group,
    exact: true,
  },
  {
    path: "/activity/myGroup",
    component: MyGroup,
  },
];
