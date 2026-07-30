import { MachinesSection } from "@/sections/MachinesPage/components/MachinesSection";

export const MachinesPage = () => {
  return (
    <main className="box-border caret-transparent max-w-[1120px] outline-[3px] no-underline w-[94%] mx-auto pb-20 md:pb-24">
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <MachinesSection />
      </div>
    </main>
  );
};
