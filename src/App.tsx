import { useState } from "react";
import { FC, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import "App.css";
import About from "components/About";
import NumberMemo from "components/NumberMemo";
import { Header } from "components/Header";

const Content = () => {
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
    <div className="App h-screen overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<NumberMemo />} />
          <Route path="about" element={<About />} />
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
