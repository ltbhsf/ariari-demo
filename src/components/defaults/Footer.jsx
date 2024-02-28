export default function Footer() {
  return (
    <footer className="bg-[#505050] w-full h-[11.25rem] text-[#FAFAFA] flex flex-col items-center justify-between py-8 absolute bottom-0">
      <section className="flex flex-row gap-[3.25rem]">
        <span>공지사항</span>
        <span>이용약관</span>
        <span>개인정보 처리방침</span>
        <span>커뮤니티 이용규칙</span>
        <span>문의 남기기</span>
      </section>

      <section className="flex flex-col items-center">
        <span>
          (주) 캠퍼스크루 ㅣ 책임자: 김대선 ㅣ 등록일자: 2024년 1월 20일
          ㅣ대표자: 원순재 ㅣ ALL RIGHTS RESERVED.{" "}
        </span>
        <span>
          주소: 서울특별시 광진구 능동로 209, 세종대왕타워 2층 ㅣ 전화번호:
          02-3408-3114 ㅣ 사업자번호 101-12-143298 ㅣ 이메일: daesun@gmail.com
        </span>
      </section>
    </footer>
  );
}
