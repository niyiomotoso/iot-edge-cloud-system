
import Dashboard from "views/Dashboard.jsx";
import PlatformConfig from "views/platform-config";
import PlatformList from "views/platform-list";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "CLOUD CONFIGURATION",
    icon: "pe-7s-user",
    component: PlatformConfig,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Currently Added Clouds",
    icon: "pe-7s-note2",
    component: PlatformList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
