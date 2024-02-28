import { createContext, useState } from "react";

const UserLocContext = createContext({
  loc: "",
  clubID: "",
  moveLoc: (target) => {},
  moveClub: (id) => {},
});

export function UserLocContextProvider({ children }) {
  const [userLoc, setUserLoc] = useState("main");
  const [clubId, setClubId] = useState();
  function moveLoc(target) {
    setUserLoc(target);
  }
  function moveClub(id) {
    setUserLoc("club");
    setClubId(id);
  }

  const userLocContext = { loc: userLoc, clubId: clubId, moveLoc, moveClub };

  return (
    <UserLocContext.Provider value={userLocContext}>
      {children}
    </UserLocContext.Provider>
  );
}

export default UserLocContext;
