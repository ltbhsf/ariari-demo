import { useState } from "react";
import Footer from "./components/defaults/Footer";
import Header from "./components/defaults/Header";
import SearchHeader from "./components/defaults/SearchHeader";
import LoginModal from "./components/defaults/LoginModal";
import { UserLocContextProvider } from "./store/UserLocContext";
import MainScreen from "./components/defaults/MainScreen";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  

  return (
    <UserLocContextProvider>
      <LoginModal open={loginModalOpen} onLoginModalClosed={() => setLoginModalOpen(false)}/>
      <Header onLoginClicked={() => setLoginModalOpen(true)} />
      <SearchHeader />
      <MainScreen />
      <Footer />
    </UserLocContextProvider>
  );
}

export default App;
