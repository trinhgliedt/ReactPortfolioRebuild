import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timeline = {
  class: "vertical-timeline-element--work",
  contentStyle: {
    background: "rgba(25, 97, 117, 0.637)",
    color: "#fff",
    padding: "0.2rem 0.5rem",
    boxShadow: "none",
  },
  contentArrowStyle: { borderRight: "7px solid rgba(25, 97, 117, 0.637)" },
  iconStyle: {
    background: "rgb(70, 83, 87)",
    color: "red",
    width: "1.8rem",
    height: "1.8rem",
    transform: "translate(1rem,1rem)",
  },
  titleClass: "vertical-timeline-element-title m-0 smallFont text-warning",
  companyClass: "vertical-timeline-element-subtitle m-0 smallFont",
};

const VerticalTimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Nov 2020 - Jan 2021"
        iconStyle={timeline.iconStyle}
        // icon={<WorkIcon />}
      >
        <p className={timeline.titleClass}>Full Stack Developer Volunteer</p>
        <p className={timeline.companyClass}>Coding Dojo</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Sep 2015 - May 2020"
        iconStyle={timeline.iconStyle}
        // icon={<WorkIcon />}
      >
        <p className={timeline.titleClass}>Accounting Manager</p>
        <p className={timeline.titleClass}>Senior Accountant</p>
        <p className={timeline.companyClass}>Pacific Urban Residential</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Jun 2013 – Sep 2015"
        iconStyle={timeline.iconStyle}
        // icon={<WorkIcon />}
      >
        <p className={timeline.titleClass}>Senior Accountant</p>
        <p className={timeline.companyClass}>Allen & Cook, Inc.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Jun 2011 – Mar 2013"
        iconStyle={timeline.iconStyle}
        // icon={<WorkIcon />}
      >
        <p className={timeline.titleClass}>Accounting Supervisor</p>
        <p className={timeline.titleClass}>Staff Accountant</p>
        <p className={timeline.companyClass}>Better Bookkeepers,</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTimeLine;
