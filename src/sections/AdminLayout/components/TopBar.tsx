import { AccountHeader } from "@/sections/AdminLayout/components/AccountHeader";
import { PrimaryNavigation } from "@/sections/AdminLayout/components/PrimaryNavigation";

export const TopBar = () => {
  return (
    <div className="bg-stone-100 box-border caret-transparent outline-[3px] no-underline border-gray-200 mb-6 pt-4 border-b border-solid">
      <div className="box-border caret-transparent max-w-[1120px] outline-[3px] no-underline w-[94%] mb-2 mx-auto md:mb-4">
        <AccountHeader />
      </div>
      <PrimaryNavigation />
    </div>
  );
};
