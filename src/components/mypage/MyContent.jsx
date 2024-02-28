import { useState } from "react";
import MyBox from "./MyBox";
import MyClubList from "./MyClubList";
import MyClubRegister from "./MyClubRegister";

const states = [
  { id: 0, title: "프로필" },
  { id: 1, title: "닉네임" },
  { id: 2, title: "비밀번호" },
  { id: 3, title: "학교 인증하기" },
  { id: 4, title: "회원탈퇴" },
];

export default function MyContent({ contentType }) {
  return (
    <section className="w-[43.375rem] flex flex-col gap-[0.375rem]">
      {contentType === 0 &&
        states.map((item) => <MyBox key={item.id} title={item.title}></MyBox>)}
      {contentType === 1 && <MyClubList />}
      {contentType === 2 && <p></p>}
      {contentType === 3 && <p></p>}
      {contentType === 4 && <MyClubRegister />}
    </section>
  );
}
