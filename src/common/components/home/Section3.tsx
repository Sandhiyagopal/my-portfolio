import ConstrainedBox from "@/common/components/core/constrained-box";
import ResponsiveBox from "@/common/components/core/ResponsiveBox";
import SectionTitle from "@/common/components/SectionTitle";
import { Timeline } from "@/common/components/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/common/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Experiences</SectionTitle>

        <Timeline
          data={experiences.map((exp, i) => ({
            title: exp.startDate + " - " + (exp.endDate || "Present"),
            content: <ExperienceItem key={`experience-${i}`} data={exp} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
