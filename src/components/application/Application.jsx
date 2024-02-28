import Button from "../../UI/Button";
import logo from "../../assets/ariAriLogo.png";

export default function Application({onApplicationSubmit}) {
  function submitHandler(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    onApplicationSubmit(data);
    e.target.reset();
     
  }
  return (
    <section className="bg-white rounded-sm p-9">
      <div className="w-36 h-36 bg-[#FAFAFA] rounded-lg flex justify-center items-center">
        <img src={logo} alt="" className="w-[6.125rem]" />
      </div>

      <h1 className="text-3xl font-bold break-all mt-3">
        아리아리 동아리 등록 신청서
      </h1>

      <form
        className="bg-white text-base [&>div]:my-4 [&>div]:flex [&>div]:flex-col [&_label]:mb-1"
        onSubmit={submitHandler}
      >
        <fieldset className="flex flex-row gap-4 my-4 [&_input]:mr-2 text-sm">
          <legend className="mb-1">분류</legend>
          <div>
            <input type="radio" name="type" id="on-campus" value="교내" />
            <label htmlFor="on-campus" className="text-base">
              교내
            </label>
          </div>

          <div>
            <input type="radio" name="type" id="union" value="연합" />
            <label htmlFor="union" className="text-base">
              연합
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="univ-name" className="text-sm">
            학교
          </label>
          <div>
            <input
              type="text"
              name="univ-name"
              className="border-solid border-black border-[1px] rounded-sm p-1 mr-3"
            />
            <Button classType="myTab-focused" size="text-sm p-1">
              인증
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="club-name" className="text-sm">
            동아리 이름
          </label>
          <input
            type="text"
            name="club-name"
            className="border-solid border-black border-[1px] rounded-sm p-1 mr-3"
          />
        </div>

        <div>
          <label htmlFor="focus-area" className="text-sm">
            분야
          </label>
          <select
            name="focus-area"
            id="focus-area"
            className="border-solid border-black border-[1px] rounded-sm p-1 mr-3"
          >
            <option value="문화생활">문화생활</option>
            <option value="친목">친목</option>
            <option value="어학">어학</option>
            <option value="예술">예술</option>
            <option value="음악/공연">음악/공연</option>
            <option value="스터디/연구">스터디/연구</option>
            <option value="스포츠/레저">스포츠/레저</option>
            <option value="창업">창업</option>
            <option value="종교">종교</option>
            <option value="신문/잡지">신문/잡지</option>
            <option value="기획단">기획단</option>
            <option value="여행">여행</option>
            <option value="봉사">봉사</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="introduce-par" className="text-sm">
            동아리 소개
          </label>
          <textarea
            name="introduce-par"
            id="introduce-par"
            cols="20"
            rows="10"
            className="border-solid border-black border-[1px] rounded-sm p-1 mr-3"
            placeholder="동아리에 대해 자유롭게 소개해주세요!"
          ></textarea>
        </div>

        <button type="form" className="bg-[#242424] w-full text-white h-9 mt-6">
          등록
        </button>
      </form>
    </section>
  );
}
