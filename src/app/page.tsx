import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/common/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/common/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/common/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/common/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/common/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/common/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/common/components/home/Section6"));

const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="hero" />
      <HomeSection2 id="services" />
      <HomeSection3 id="experiences" />
      <HomeSection4 id="skills" />
      <HomeSection5 id="projects" />
      <HomeSection6 id="contact" />
    </PageBox>
  );
};

export default Home;
