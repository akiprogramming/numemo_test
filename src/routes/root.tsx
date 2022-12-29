import { Routes, Route, Outlet, Router } from "react-router-dom";

const Dashboard = () => {
  return <div>DashBoard</div>;
};
const DashboardMessages = () => {
  return <div>DashBoardMessages</div>;
};
const DashboardTasks = () => {
  return <div>DashBoardTasks</div>;
};
const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default function Root() {
  return (
    <Route path="/" element={<Dashboard />}>
      {" "}
      <Route path="messages" element={<DashboardMessages />} />
      <Route path="tasks" element={<DashboardTasks />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  );
}
