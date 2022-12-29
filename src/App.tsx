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
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AboutNumemo from "./components/AboutNumemo";
import NumberMemo from "./components/NumberMemo";

const Dashboard = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const DashboardMessages = () => {
  return <div>DashBoardMessages</div>;
};
const DashboardTasks = () => {
  return <div>DashBoardTasks</div>;
};

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<NumberMemo />} />
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
          <Route path="about" element={<AboutNumemo />} />
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
