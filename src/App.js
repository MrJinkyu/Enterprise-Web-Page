import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import ChatBotModal from "./components/ChatBotModal";
import ChatBotBtn from "./components/ChatBotBtn";
import ScrollTop from "./components/ScrollTop";

const queryClient = new QueryClient();

function App() {
  const [modal, setModal] = useState(false);
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ScrollTop />
        <Header />
        <Outlet />
        <ChatBotBtn handleClick={setModal} />
        {modal && <ChatBotModal handleClick={setModal} />}
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
