// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  }
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    children: [
      {
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '分类管理',
    path: '/cate',
    icon: 'cascades',
    children: [
      { name: '分类列表', path: '/cate/list' },
      { name: '添加分类', path: '/cate/create' },
    ],
  },
  {
    name: '标签管理',
    path: '/tag',
    icon: 'pin',
    children: [
      { name: '标签列表', path: '/tag/list' },
      { name: '添加标签', path: '/tag/create' },
    ],
  },
  {
    name: '课程管理',
    path: '/course',
    icon: 'content',
    children: [
      { name: '课程列表', path: '/course/list' },
      { name: '课程管理', path: '/course/create' },
    ],
  },
  {
    name: '视频管理',
    path: '/video',
    icon: 'video',
    children: [
      { name: '视频列表', path: '/video/list' },
      { name: '视频上传', path: '/video/create' },
    ],
  },
  {
    name: '音频管理',
    path: '/audio',
    icon: 'horn',
    children: [
      { name: '音频列表', path: '/audio/list' },
      { name: '音频上传', path: '/audio/create' },
    ],
  },
  {
    name: '文章管理',
    path: '/post',
    icon: 'copy',
    children: [
      { name: '文章列表', path: '/post/list' },
      { name: '添加文章', path: '/post/create' },
    ],
  },
  {
    name: '用户管理',
    path: '/users',
    icon: 'yonghu',
    children: [
      { name: '用户列表', path: '/users/list' },
      { name: '添加用户', path: '/users/create' },
      { name: '修改密码', path: '/users/pwd' },
    ],
  },
  {
    name: '评论管理',
    path: '/comment',
    icon: 'chart',
    children: [
      { name: '评论列表', path: '/comment/list' },
    ],
  },
  {
    name: '意见反馈',
    path: '/feedback',
    icon: 'message',
    children: [
      { name: '意见列表', path: '/feedback/list' },
      { name: '意见详情', path: '/feedback/detail' },
    ],
  },
  {
    name: '通用设置',
    path: '/setting',
    icon: 'shezhi',
    children: [
      { name: '基础设置', path: '/setting/basic' },
      {
        name: '菜单设置',
        path: '/setting/navigation',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
