import myPic from "./../../../assets/profileThumbnail.jpg";

export default function logo() {
  return (
    <img
      className="rounded-circle shadow"
      src={myPic}
      width="40px"
      height="40px"
      alt="profile pic"
    />
  );
}
