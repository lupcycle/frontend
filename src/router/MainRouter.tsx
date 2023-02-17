import { Route, Routes } from "react-router-dom";
import Screen from "../page/Figma/screen";
import MainContent from "../page/layout/Content";
import MainFooter from "../page/layout/Footer";
import MainHeader from "../page/layout/Header";
import MainPage from "../page/MainPage";





const MainRouter = () => {
  return (
    <>
      <MainHeader/>
      <MainContent>
        <Routes>
          <Route path=""      element={<MainPage/>}/>
          <Route path="/test" element={<Screen/>}/>
        </Routes>
      </MainContent>
      <MainFooter/>
    </>
  )
}

export default MainRouter;