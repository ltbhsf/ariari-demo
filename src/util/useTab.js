import { useState } from "react";

export default function useTab(tab, defaultFocused) {
  const [tabs, setTabs] = useState(tab);
  const [focusedTab, setFocusedTab] = useState(defaultFocused);

  function focuseChanged(id) {
    setFocusedTab(id);
  }

  return { tabs, focusedTab, focuseChanged };
}
