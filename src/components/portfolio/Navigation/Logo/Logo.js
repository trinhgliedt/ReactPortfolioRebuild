import { Link } from "react-router-dom";
import myPic from "./../../../../assets/portfolio/profileThumbnail.jpg";

export default function logo() {
  return (
    <Link to="/">
      <img
        className="rounded-circle shadow logo"
        src={myPic}
        width="40px"
        height="40px"
        alt="profile pic"
      />
    </Link>
  );
}
