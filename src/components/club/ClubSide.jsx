import Button from "../../UI/Button";

export default function ClubSide({
  focusedTab,
  Tabs,
  onTabChanged,
  isManager,
}) {
  return (
    <div className="flex flex-col w-[12.75rem] flex-shrink-0">
      {Tabs.map((tab) => {
        if (tab.id !== 5 || (isManager && tab.id === 5)) {
          return (
            <Button
              classType={tab.id === focusedTab ? "clubTab-focused" : "clubTab"}
              size="h-12 pl-8 text-[0.875rem] flex justify-start items-center"
              key={tab.id}
              onClick={() => onTabChanged(tab.id)}
            >
              {tab.title}
            </Button>
          );
        }
      })}
    </div>
  );
}
