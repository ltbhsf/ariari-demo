import AlarmType from "./AlarmType";
import alarmArrow from "../../assets/alarmArrow.png";

export default function Alarm({ unread, type, children, time }) {
  const now = new Date(Date.now());

  const timeDifferenceInMilliseconds = now - time; // 밀리초 단위로 시간 차이 계산

  // 분으로 변환
  const timeDifferenceInMinutes = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60)
  );

  let displayString;
  if (timeDifferenceInMinutes < 60) {
    displayString = `${timeDifferenceInMinutes}분 전`;
  } else if (timeDifferenceInMinutes < 24 * 60) {
    const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
    displayString = `${timeDifferenceInHours}시간 전`;
  } else {
    const timeDifferenceInDays = Math.floor(
      timeDifferenceInMinutes / (60 * 24)
    );
    displayString = `${timeDifferenceInDays}일 전`;
  }

  return (
    <li className="flex flex-row gap-3 items-center">
      <div className="flex flex-row gap-1 justify-end w-[4.688rem]">
        <AlarmType>{type}</AlarmType>
        {unread && <AlarmType>New</AlarmType>}
      </div>
      <div className="border-solid py-5 border-[#EBEBEB] border-b-[1px] flex-1 text-[0.875rem] flex justify-between">
        <span>{children}</span>
        <div className="flex flex-row gap-2">
          <span>{displayString}</span>
          <img src={alarmArrow} alt="" />
        </div>
      </div>
    </li>
  );
}
