

export default function MyBox({ title, children }) {
  return (
    <div className="pl-14 py-5 w-full bg-white border-[1px] border-[#EBEBEB]">
      <h3 className="text-[#242424] text-base">{title}</h3>
      {children}
    </div>
  );
}
