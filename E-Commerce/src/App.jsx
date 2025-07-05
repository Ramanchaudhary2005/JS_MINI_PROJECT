import { BrowserRouter, Routes, Route } from "react-router";

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:productId/view" element={<View />} />
        <Route path="/category" element={<ViewCategory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;