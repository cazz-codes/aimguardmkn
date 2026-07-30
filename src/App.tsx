import { Routes, Route, Navigate } from "react-router-dom";
import { UnsupportedBrowserNotice } from "@/components/UnsupportedBrowserNotice";
import { FloatingWidget } from "@/components/FloatingWidget";
import { AdminLayout } from "@/sections/AdminLayout";
import { MachinesPage } from "@/sections/MachinesPage";
import { ServicesPage } from "@/sections/ServicesPage";
import { UsersPage } from "@/sections/UsersPage";
import { TutorialsPage } from "@/sections/TutorialsPage";
import { SettingsPage } from "@/sections/SettingsPage";
import { ResourceHubPage } from "@/sections/ResourceHubPage";

export const App = () => {
  return (
    <div className="accent-auto bg-white box-border caret-transparent text-neutral-800 block text-sm not-italic normal-nums font-normal tracking-[-0.21px] leading-[20.0004px] list-outside list-disc min-h-[1000px] outline-[3px] pointer-events-auto text-start no-underline indent-[0px] normal-case visible w-full border-separate font-inter">
      <UnsupportedBrowserNotice />
      <FloatingWidget />
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<MachinesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/resource-hub" element={<ResourceHubPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
