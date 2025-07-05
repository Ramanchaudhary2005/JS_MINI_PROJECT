import { BrowserRouter, Routes, Route } from "react-router";
import { SearchPage } from "./pages/SearchPage";
import { CategoryViewPage } from "./pages/CategoryViewPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ViewPage } from "./pages/ViewPage";
import {HomePage} from "./pages/HomePage";

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:productId/view" element={<ViewPage />} />
        <Route path="/category" element={<CategoryViewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Ooops.. Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;