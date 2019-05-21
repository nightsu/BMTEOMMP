// 菜单配置
// navigationMenuConfig：导航配置
// asideMenuConfig：侧边导航配置

const navigationMenuConfig = [
  {
    name: "Globle",
    path: "/",
    icon: "icondiqiu",
    newWindow: false
  },
  {
    name: "Reports",
    path: "/report",
    icon: "iconbaogao",
    newWindow: false
  },
  {
    name: "Drawings",
    path: "/drawing",
    icon: "iconicon-book",
    newWindow: false
  },
  {
    name: "Photos",
    path: "/photo",
    icon: "icontupian",
    newWindow: false
  },
  {
    name: "LIDAR",
    path: "/lidar",
    icon: "iconyun",
    newWindow: false
  }
];
const headerMenuConfig = [
  {
    name: "Unread message(3)",
    path: "/mymessage",
    icon: "mail",
    newWindow: false
  },
  {
    name: "Personal center",
    path: "/myinfo",
    icon: "info-circle",
    newWindow: false
  },
  {
    name: "Personal setting",
    path: "/mysetting",
    icon: "setting",
    newWindow: false
  },
  {
    name: "Change password",
    path: "/",
    icon: "unlock",
    newWindow: false
  },
  {
    name: "Sign out",
    path: "/user/login",
    icon: "export",
    newWindow: false
  }
];

const asideMenuConfig = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "home",
    children: [
      {
        name: "监控页",
        path: "/dashboard/monitor"
      }
    ]
  },
  {
    name: "文章管理",
    path: "/post",
    icon: "copy",
    children: [
      { name: "文章列表", path: "/post/list" },
      { name: "添加文章", path: "/post/create" }
    ]
  }
];

export { navigationMenuConfig,headerMenuConfig, asideMenuConfig };
