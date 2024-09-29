import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landinpage from "./pages/Landinpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landinpage />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
