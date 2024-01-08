import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Access from "./pages/noAccess";
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./util/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/noAccess" element={<Access/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path="/admin" element={
            <ProtectedRoute adminOnly={true}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Toaster
        position="top-right"
        reverseOrder={false}
        />
      </Router>
    </div>
  );
}

export default App;
