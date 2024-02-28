import Alarm from "./Alarm";
import { DummyAlarmList } from "../../dummy/dummy";

export default function AlarmList() {
  const sortedDummyAlarmList = DummyAlarmList.sort((a, b) => b.time - a.time);
  return (
    <section className="w-[75.25rem] bg-white m-auto flex flex-row justify-between pr-20 py-10">
      <h1 className="text-[1.75rem] px-20">알림</h1>

      <ul className="flex-1 text-[#242424]">
        {sortedDummyAlarmList.map((item) => (
          <Alarm
            key={item.id}
            type={item.type}
            unread={item.unread}
            time={item.time}
          >
            [{item.clubType}] {item.title}
          </Alarm>
        ))}
      </ul>
    </section>
  );
}
