import { useContext } from "react";
import Button from "../../UI/Button";
import ProfileImg from "./ProfileImg";
import UserLocContext from "../../store/UserLocContext";

export default function Header({ onLoginClicked}) {
  const locCtx = useContext(UserLocContext);
  
  return (
    <header className="w-[75.25rem] m-auto flex flex-row justify-between h-20 items-center">
      <div
        className="flex flex-row lg:gap-3 items-center "
        onClick={() => locCtx.moveLoc("main")}
      >
        <ProfileImg />

        <span className="lg:text-[1.125rem] text-[#242424]">
          한국대학교#1324
        </span>
      </div>

      <menu className="flex flex-row gap-4">
        <Button
          classType="menuTextOnly"
          size="text-base p-[0.625rem]"
          onClick={() => locCtx.moveLoc("alarm")}
        >
          새 알림
        </Button>
        <Button
          classType="menuTextOnly"
          size="text-base p-[0.625rem]"
          onClick={() => locCtx.moveLoc("myPage")}
        >
          마이페이지
        </Button>
        <Button classType="menuTextOnly" onClick={onLoginClicked}>
          로그인
        </Button>
      </menu>
    </header>
  );
}
