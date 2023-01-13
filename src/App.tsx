import { FC, useEffect } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import "App.css";
import { AboutPage } from "components/AboutPage";
import { NumemoPage } from "components/NumemoPage";
import { Header } from "components/Header";

const PageContainer = () => {
  return (
    <div className="mx-auto p-3">
      <Outlet />
    </div>
  );
};

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="App h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<NumemoPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
};

// const App: VFC = () => {
//   const { hash, pathname } = useLocation();

//   useEffect(() => {
//     if (!hash) window.scrollTo(0, 0);
//   }, [hash, pathname]);

//   return (
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="characters" element={<Characters />}>
//           <Route path="" element={<AllCharacters />} />
//           <Route path=":schoolCode" element={<SchoolCharacters />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// };

export default App;
