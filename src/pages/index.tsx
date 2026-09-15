import { NextPage } from 'next';
import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import PartnerCompanies from '../components/PartnerCompanies';
import Features from '../components/Features';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Careers from '../components/Careers';
import MainLayout from '../components/layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout
      title="睐智人力 - 专业人力资源外包服务"
      description="提供HRO岗位外包、RPO批量招聘、中高端猎头、人事代理、劳务派遣、灵活用工和员工福利服务"
    >
      <div className="min-h-screen bg-white">
        <div>
          <Hero />
          <CompanyOverview />
          <PartnerCompanies />
          <Features />
          <CaseStudies />
          <Testimonials />
          <Careers />
        </div>

      </div>
    </MainLayout>
  );
};

export default HomePage;
