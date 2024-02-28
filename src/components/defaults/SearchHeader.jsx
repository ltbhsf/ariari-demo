import { useContext } from "react";
import Button from "../../UI/Button";
import UserLocContext from "../../store/UserLocContext";

export default function SearchHeader() {
  const locCtx = useContext(UserLocContext);
  return (
    <header className="border-solid border-[#EBEBEB] border-[1px]">
      <div className="w-[75.25rem] h-20 m-auto flex flex-row items-center justify-between">
        <div className="relative">
          <input
            className="w-[22.5rem] rounded-full h-10 bg-[#FAFAFA] pl-5 border-solid border-[#CCCCCC] border-[1px]"
            type="search"
            placeholder="한국대학교 발레 동아리"
          />
          <Button classType="search" />
        </div>

        {locCtx.loc === "main" && (
          <div className="flex flex-row gap-[0.688rem]">
            <Button classType="category" size="h-10 w-[4.75rem]">
              전체
            </Button>
            <Button classType="category" size="h-10 w-[4.75rem]">
              교내
            </Button>
            <Button classType="category" size="h-10 w-[4.75rem]">
              연합
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
