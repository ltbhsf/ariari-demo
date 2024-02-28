import ProfileImg from "../defaults/ProfileImg";

export default function MyProfile() {
  return (
    <section className="w-full flex flex-row gap-[0.625rem] py-[0.875rem] pl-6 border-solid border-[1px] border-[#EBEBEB] bg-white">
      <ProfileImg size="14" />
      <div className="flex flex-col justify-center">
        <span className="text-[#808080] text-[0.875rem]">학교 미인증</span>
        <h3 className="text-[#242424] text-sm">세종대학교#2213 님</h3>
      </div>
    </section>
  );
}
