import modalClose from "../../assets/modalClose.png";

import { useState } from "react";
import Modal from "../../UI/Modal";
import Application from "../application/Application";
import Button from "../../UI/Button";

export default function MyClubRegister() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <Modal open={isSubmit}>
        <div className="relative w-52 h-32 flex justify-center items-center text-center text-sm p-2">
          <Button
            classType="modalClose"
            size="absolute top-4 right-4"
            style={{ backgroundImage: `url(${modalClose})` }}
            onClick={()=>{setIsSubmit(false)}}
          ></Button>
          <span>
            신청 완료. <br />
            [내 동아리 보기]에서 승인 현황을 확인하세요.
          </span>
        </div>
      </Modal>
      <Application
        onApplicationSubmit={() => {
          setIsSubmit(true);
        }}
      />
    </>
  );
}
