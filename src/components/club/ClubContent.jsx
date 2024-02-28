import ClubHome from "./ClubHome";
import ClubManage from "./ClubManage";

export default function ClubContent({ club, contentType }) {
  return (
    <section className="flex flex-col">
      <span className="bg-[#FFFBFB] p-5">
        <h1 className="text-3xl mb-3 font-bold">{club.title}</h1>

        <p className="w-1/2 text-sm text-justify break-all w-inherit">
          {club.para}
        </p>
      </span>
      {contentType === 0 && <ClubHome club={club} />}
      {contentType === 1 && <p>공지사항</p>}
      {contentType === 2 && <p>새 소식</p>}
      {contentType === 3 && <p>동아리 활동</p>}
      {contentType === 4 && <p>동아리 게시판</p>}
      {contentType === 5 && <ClubManage />}
    </section>
  );
}
