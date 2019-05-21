import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Drawing from './pages/Drawing';
import Report from './pages/Report';
import Photo from './pages/Photo';
import Scene from './pages/GIS/Scene';
import MyInfo from './pages/MyInfo';
import MyMessage from './pages/MyMessage';
import MySetting from './pages/MySetting';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/drawing',
    component: Drawing,
  },
  {
    path: '/report',
    component: Report,
  },
  {
    path: '/photo',
    component: Photo,
  },
  {
    path: '/myinfo',
    component: MyInfo,
  },
  {
    path: '/mymessage',
    component: MyMessage,
  },
  {
    path: '/mysetting',
    component: MySetting,
  },
  {
    path: '/',
    component: ()=><div></div>,
  }
];

export default routerConfig;
