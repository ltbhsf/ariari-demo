import Button from "../../UI/Button";
import Post from "./Post";

export default function PostHighlight({title}) {
  return (
    <section className="w-[75.25rem] m-auto">
      <div className="flex flex-row justify-between items-start">
        <h1 className="text-[1.75rem] mt-16 font-bold">
          {title}
        </h1>

        <div className="flex flex-row gap-[1.313rem] text-[#242424] mt-[4.75rem]">
          <Button classType="textOnly">필터</Button>
          <Button classType="textOnly">중앙동아리</Button>
          <Button classType="textOnly">연합동아리</Button>
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-6">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}
