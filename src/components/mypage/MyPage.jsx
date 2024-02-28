import { useState } from "react";
import MyContent from "./MyContent";
import MySide from "./MySide";
import useTab from "../../util/useTab";


export default function MyPage() {
 const {tabs:Tabs, focusedTab, focuseChanged} = useTab([
    { id: 0, title: "내 정보 관리" },
    { id: 1, title: "내 동아리 보기" },
    { id: 2, title: "즐겨찾기" },
    { id: 3, title: "로그아웃" },
    { id: 4, title: "동아리 등록" },
  ], 0); 


  
  return (
    <div className="flex flex-row justify-center gap-6 pt-5 pb-24">
      <MySide focusedTab={focusedTab} Tabs={Tabs} onTabChanged={(id)=>focuseChanged(id)} />
      <MyContent contentType={focusedTab} />
    </div>
  );
}
