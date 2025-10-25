import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import MydonationsPage from "./pages/MydonationsPage";
import ReceivedPage from "./pages/ReceivedPage";
import CreateDonationPage from './pages/CreateDonationPage';
import SigninPage from "./components/Navbar/Auth/SigninPage";
import SignupPage from "./components/Navbar/Auth/SignupPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import MyActivitiesPage from "./pages/MyActivitiesPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/mydonations" element={<MydonationsPage />} />
          <Route path="/received" element={<ReceivedPage />} />
          <Route path="/donate" element={<CreateDonationPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<MyActivitiesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
