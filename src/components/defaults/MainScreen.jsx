import { useContext } from "react";
import AlarmList from "../alarm/AlarmList";
import MyPage from "../mypage/MyPage";
import MainPost from "./MainPost";
import UserLocContext from "../../store/UserLocContext";
import ClubMain from "../club/ClubMain";

export default function MainScreen() {
  const {loc, clubId} = useContext(UserLocContext);
  
  return (
    <main className="bg-[#FAFAFA] w-full [&>div]:pb-64 [&>section]:pb-64">
      {loc === "main" && <MainPost />}
      {loc === "alarm" && <AlarmList />}
      {loc === "myPage" && <MyPage />}
      {loc === "club" && <ClubMain clubId={clubId} />}
    </main>
  );
}
