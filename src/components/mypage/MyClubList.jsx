import { useContext, useState } from "react";
import Button from "../../UI/Button";
import { DummyClubs } from "../../dummy/dummy";
import UserLocContext from "../../store/UserLocContext";
export default function ({onUserLocChanged}) {
  const [clubFiltered, setClubFiltered] = useState(false);
  const locCtx = useContext(UserLocContext);

  return (
    <>
      <div className="flex flex-row gap-6 mb-2">
        <Button
          classType={clubFiltered ? "myTab" : "myTab-focused"}
          size="w-full py-8 flex justify-center"
          onClick={() => {
            setClubFiltered(false);
          }}
        >
          내가 참여한 동아리
        </Button>
        <Button
          classType={!clubFiltered ? "myTab" : "myTab-focused"}
          size="w-full py-8 flex justify-center"
          onClick={() => {
            setClubFiltered(true);
          }}
        >
          내가 관리하는 동아리
        </Button>
      </div>

      <ul className="flex flex-col gap-2">
        {DummyClubs.map((club) => {
          if (!clubFiltered || (clubFiltered && club.status === "manager")) {
            return (
              <li
              
              onClick={()=>locCtx.moveClub(club.id)}
                key={club.id}
                className="flex flex-row justify-between py-5 px-6 w-full bg-white border-[1px] border-[#EBEBEB] text-base"
              >
                <span className="text-[#242424]">
                  [{club.type}] {club.title}
                </span>
                <span className="text-gray-400 text-sm">
                  {club.state === "leaving" && "탈퇴중"}
                  {club.state === "waiting" && "승인 대기"}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
