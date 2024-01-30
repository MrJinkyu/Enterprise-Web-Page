import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
