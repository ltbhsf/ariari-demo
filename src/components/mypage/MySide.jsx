import MyProfile from "./MyProfile";
import tabArrow from "../../assets/myTabArrow.png";
import tabArrowGray from "../../assets/myTabArrowGray.png";
import Button from "../../UI/Button";
import { useState } from "react";


export default function MySide({onTabChanged, focusedTab, Tabs}) {
  

  
  return (
    <section className="w-[17.625rem] flex flex-col gap-3 [&>*]:w-full">
      <MyProfile />
      {Tabs.map((item) => (
        <Button
          key={item.id}
          classType={focusedTab === item.id ? "myTab-focused" : "myTab"}
          onClick={() => onTabChanged(item.id)}
          size="px-6 py-4 flex felx-row justify-between"
        >
          {item.title}
          <img src={focusedTab === item.id ? tabArrow : tabArrowGray} alt="" />
        </Button>
      ))}
    </section>
  );
}
