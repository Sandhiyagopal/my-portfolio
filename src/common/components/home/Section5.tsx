import ConstrainedBox from "@/common/components/core/constrained-box";
import ResponsiveBox from "@/common/components/core/ResponsiveBox";
import SectionTitle from "@/common/components/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/common/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Recent Works</SectionTitle>

        <ProjectList projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
