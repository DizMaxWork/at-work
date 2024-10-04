import { Users } from "./components/Users/Users";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Исправлено здесь
import { UserDetail } from "./components/UserDetail/UserDetail";
import { UsersHeader } from "./components/UsersHeader/UsersHeader";

function App() {
  return (
    <div>
      <Router>
        <UsersHeader />
        <div className="bg">
          <Routes>
            <Route path="/at-work" element={<Users />} />
            <Route path="/at-work/user/:userId" element={<UserDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
