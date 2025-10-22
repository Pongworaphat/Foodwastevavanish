import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import MydonationsPage from "./pages/MydonationsPage";
import ReceivedPage from "./pages/ReceivedPage";
import CreateDonationPage from './pages/CreateDonationPage';

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
        </Routes>
      </div>
    </>
  );
}

export default App;
