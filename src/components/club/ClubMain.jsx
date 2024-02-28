import Button from "../../UI/Button";
import { DummyClubs } from "../../dummy/dummy";
import useTab from "../../util/useTab";
import ClubContent from "./ClubContent";
import ClubSide from "./ClubSide";

export default function ClubMain({ clubId }) {
  const club = DummyClubs.find((club) => club.id === clubId);
  const { tabs, focusedTab, focuseChanged } = useTab(
    [
      { id: 0, title: "동아리 홈" },
      { id: 1, title: "공지사항" },
      { id: 2, title: "새 소식" },
      { id: 3, title: "동아리 활동" },
      { id: 4, title: "동아리 게시판" },
      { id: 5, title: "동아리 관리" },
    ],
    0
  );

  return (
    <section className=" bg-white w-full h-full pt-12">
      <div className="w-[75.25rem] m-auto flex flex-row gap-[3.625rem]">
        <ClubSide
          Tabs={tabs}
          focusedTab={focusedTab}
          onTabChanged={(id) => focuseChanged(id)}
          isManager={club.status === 'manager'}
        />
        <ClubContent club={club} contentType={focusedTab}/>
      </div>
    </section>
  );
}
