import { Route, Routes } from "react-router-dom";
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
          <Route path="" element={<MainPage/>}/>
        </Routes>
      </MainContent>
      <MainFooter/>
    </>
  )
}

export default MainRouter;