import defaultProfileImg from "../../assets/anonyProfile.png";

export default function ProfileImg({size}) {
  return (
    <div className={`bg-[#EBEBEB] rounded-full w-10 h-10 flex justify-center items-center`}>
      <img src={defaultProfileImg} alt="profile" />
    </div>
  );
}
