import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import modalClose from "../../assets/modalClose.png";
import { useEffect } from "react";

export default function LoginModal({ open, onLoginModalClosed }) {
  function modalCloseHandler(e) {
    e.preventDefault();
    onLoginModalClosed();
  }
  return (
    <Modal open={open}>
      <div className="rounded-lg px-7 flex flex-col items-center relative backdrop:bg-[rgba(20, 20, 20, 0.3)]">
        <h1 className="text-[#242424] text-[1.5rem] mt-[3.75rem]">
          Campus 크루
        </h1>
        <form>
          <Button
            classType="modalClose"
            size="top-6 left-[16.688rem]"
            style={{ backgroundImage: `url(${modalClose})` }}
            onClick={modalCloseHandler}
          ></Button>
          <div className="flex flex-col">
            <label className="text-[#CCCCCC] text-[0.625rem]" htmlFor="email">
              이메일
            </label>
            <input
              className="w-full h-9 border-solid border-[#CCCCCC] border-[1px] bg-[#FAFAFA]"
              type="email"
            />
          </div>

          <div>
            <label
              className="text-[#CCCCCC] text-[0.625rem]"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="w-full h-9 border-solid border-[#CCCCCC] border-[1px] bg-[#FAFAFA]"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#242424] w-full text-white h-9 mt-6"
          >
            로그인
          </button>
        </form>

        <div className="text-[0.5rem] underline flex flex-row gap-3 text-[#505050] mt-3 ">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
          <span>회원가입</span>
        </div>

        <div className="flex flex-row items-center gap-3 my-3">
          <div className="border-solid border-t-[1px] border-[#EBEBEB] w-[6.875rem]"></div>
          <span className="text-[#808080] text-[0.5rem]">또는</span>
          <div className="border-solid border-t-[1px] border-[#EBEBEB] w-[6.875rem]"></div>
        </div>

        <a className="bg-[#FFE606] w-full text-[#242424] h-9 flex justify-center items-center mb-[3.75rem]">
          카카오계정 로그인
        </a>
      </div>
    </Modal>
  );
}
