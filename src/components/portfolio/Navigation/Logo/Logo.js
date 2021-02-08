import { Link } from "react-router-dom";
import myPic from "./../../../../assets/profileThumbnail.jpg";
import "./styles.scss";

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
