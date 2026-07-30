import { TopBar } from "@/sections/AdminLayout/components/TopBar";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="box-border caret-transparent min-h-[1000px] outline-[3px] relative no-underline z-0">
      <TopBar />
      <Outlet />
    </div>
  );
};
