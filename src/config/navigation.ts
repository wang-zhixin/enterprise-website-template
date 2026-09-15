export interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: '首页', href: '/' },
  { name: '产品服务', href: '/services' },
  { name: '企业案例', href: '/case-studies' },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
];

export const siteConfig = {
  name: '睐智人力',
  description: '专业人力资源外包服务机构',
  getStarted: {
    href: '/get-started',
    text: 'Get Started',
  },
};
