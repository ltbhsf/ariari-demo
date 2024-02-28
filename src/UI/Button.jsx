export default function Button({ children, classType, size, ...props }) {
  let cssClasses =
    classType === "menuTextOnly"
      ? "text-[#555555] "
      : classType === "category"
      ? "bg-[#EBEBEB] rounded-3xl text[#242424] "
      : classType === "search"
      ? "w-6 h-6 bg-[url('./assets/searchButton.png')] absolute right-5 top-1/2  -translate-y-1/2 "
      : classType === "myTab-focused"
      ? "bg-[#242424] text-white text-base "
      : classType === "myTab"
      ? "border-solid border-[1px] border-[#EBEBEB] bg-white text-[#505050] text-base "
      : classType === "modalClose"
      ? "w-[0.875rem] h-[0.875rem] absolute "
      : classType === "clubTab"
      ? "bg-[#FAFAFA] "
      : classType === "clubTab-focused"
      ? "bg-black text-white "
      : "";

  cssClasses += size;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
