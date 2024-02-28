import { DummyApplicants } from "../../dummy/dummy";
import ClubBox from "./ClubBox";

export default function ClubManage() {
  return (
    <section className=" w-full mt-3">
      <h2 className="text-[1.25rem]">지원현황</h2>
      <div className="flex flex-row gap-2">
        <ClubBox>
          N명 <br /> 승인 대기
        </ClubBox>
        <ClubBox>
          N명 <br /> 진행
        </ClubBox>
        <ClubBox>
          N명 <br /> 승인
        </ClubBox>
      </div>

      <table className="w-full text-center mt-2">
        <thead>
          <th>이름</th>
          <th>입학년도</th>
          <th>학과</th>
          <th>신청일</th>
        </thead>

        <tbody>
          {DummyApplicants.map((applicant) => (
            <tr className="bg-[#D9D9D9] p-1" key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.admissionYear}</td>
              <td>{applicant.department}</td>
              <td>{applicant.submitDate.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
