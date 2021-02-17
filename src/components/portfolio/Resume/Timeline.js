import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timeline = {
  class: "vertical-timeline-element--work my-4",
  contentStyle: {
    background: "rgba(45, 45, 46, 0.157)",
    border: "1px solid black",
    color: "#fff",
    padding: "0.2rem 0.5rem",
    boxShadow: "none",
  },
  contentArrowStyle: { borderRight: "7px solid darkGrey" },
  dateClassName: "smallFont",
  iconStyle: {
    background: "rgb(70, 83, 87)",
    margin: "1rem 0.6rem",
    width: "1.2rem",
    height: "1.2rem",
  },
  iconStyleSpecial: {
    background: "rgb(5, 108, 117)",
    margin: "1rem 0.6rem",
    width: "1.2rem",
    height: "1.2rem",
  },
  titleClass: "vertical-timeline-element-title m-0 smallFont text-warning",
  companyClass: "vertical-timeline-element-subtitle m-0 smallFont",
};

const VerticalTimeLine = () => {
  return (
    <VerticalTimeline layout="1-column" className=" py-2">
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Nov 2020 - Jan 2021"
        dateClassName={timeline.dateClassName}
        iconStyle={timeline.iconStyleSpecial}
      >
        <p className={timeline.titleClass}>Full Stack Developer Volunteer</p>
        <p className={timeline.companyClass}>Coding Dojo</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Sep 2015 - May 2020"
        dateClassName={timeline.dateClassName}
        iconStyle={timeline.iconStyle}
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
        dateClassName={timeline.dateClassName}
        iconStyle={timeline.iconStyle}
      >
        <p className={timeline.titleClass}>Senior Accountant</p>
        <p className={timeline.companyClass}>Allen & Cook, Inc.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={timeline.class}
        contentStyle={timeline.contentStyle}
        contentArrowStyle={timeline.contentArrowStyle}
        date="Jun 2011 – Mar 2013"
        dateClassName={timeline.dateClassName}
        iconStyle={timeline.iconStyle}
      >
        <p className={timeline.titleClass}>Accounting Supervisor</p>
        <p className={timeline.titleClass}>Staff Accountant</p>
        <p className={timeline.companyClass}>Better Bookkeepers,</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTimeLine;
