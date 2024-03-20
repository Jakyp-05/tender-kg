import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Auction,
  Contest,
  Grant,
  Home,
  Privacy,
  NotFound,
  Tender,
  Term,
  Login,
  Registration,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="auction" element={<Auction />} />
        <Route path="contest" element={<Contest />} />
        <Route path="grant" element={<Grant />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="tender" element={<Tender />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="terms" element={<Term />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
