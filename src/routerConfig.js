// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import CateList from './pages/CateList';
import CreateCate from './pages/CreateCate';
import TagList from './pages/TagList';
import CreateTag from './pages/CreateTag';
import UserList from './pages/UserList';
import CreateCourse from './pages/CreateCourse';
import CourseList from './pages/CourseList';
import CreateAudio from './pages/CreateAudio';
import AudioList from './pages/AudioList';
import CreateVideo from './pages/CreateVideo';
import VideoList from './pages/VideoList';
import FeedBack from './pages/FeedBack';
import FeedBackDetail from './pages/FeedBackDetail';
import CommentList from './pages/CommentList';


const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/users/list',
    component: UserList,
  },
  {
    path: '/tag/list',
    component: TagList,
  },
  {
    path: '/tag/create',
    component: CreateTag,
  },
  {
    path: '/cate/list',
    component: CateList,
  },
  {
    path: '/cate/create',
    component: CreateCate,
  },
  {
    path: '/post/list',
    component: PostList,
  },
  {
    path: '/post/create',
    component: CreatePost,
  },
  {
    path: '/course/create',
    component: CreateCourse,
  },
  {
    path: '/course/list',
    component: CourseList,
  },
  {
    path: '/audio/create',
    component: CreateAudio,
  },
  {
    path: '/audio/list',
    component: AudioList,
  },
  {
    path: '/comment/list',
    component: CommentList,
  },
  {
    path: '/video/create',
    component: CreateVideo,
  },
  {
    path: '/video/list',
    component: VideoList,
  },
  {
    path: '/feedback/list',
    component: FeedBack,
  },
  {
    path: '/feedback/detail',
    component: FeedBackDetail,
  },
];

export default routerConfig;
