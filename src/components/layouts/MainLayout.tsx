import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout = ({ children, title = '睐智人力', description = '专业人力资源外包服务机构' }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/ruise-favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/ruise-favicon.png" />
        <meta name="description" content={description} />
        <meta name="keywords" content="睐智人力,HRO岗位外包,RPO招聘外包,劳务派遣,灵活用工,人事代理" />
      </Head>

      <Navbar />

      <main className="flex flex-1 flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
