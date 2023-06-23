import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="home">
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))} */}
      <Route path="home">
        <Route element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
