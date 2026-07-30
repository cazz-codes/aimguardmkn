import { Link } from "react-router-dom";

export const PrimaryNavigation = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] relative no-underline overflow-auto top-px">
      <nav className="items-center box-border caret-transparent flex max-w-none outline-[3px] relative no-underline w-auto mx-0 md:max-w-[1120px] md:w-[94%] md:mx-auto">
        <Link
          to="/"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap ml-1 py-2 md:-ml-3"
        >
          <div className="items-center box-border caret-transparent text-indigo-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md after:accent-auto after:bg-indigo-700 after:box-border after:caret-transparent after:text-indigo-700 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[-0.21px] after:leading-[20.0004px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:bottom-0 after:inset-x-2.5 after:font-inter">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-semibold min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-indigo-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Overview
            </div>
          </div>
        </Link>

        <Link
          to="/services"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap py-2"
        >
          <div className="items-center box-border caret-transparent text-neutral-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-5.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-medium min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Services
            </div>
          </div>
        </Link>
        <Link
          to="/users"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap py-2"
        >
          <div className="items-center box-border caret-transparent text-neutral-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-medium min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Users
            </div>
          </div>
        </Link>
        <Link
          to="/tutorials"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap py-2"
        >
          <div className="items-center box-border caret-transparent text-neutral-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-7.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-medium min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Tutorials
            </div>
          </div>
        </Link>

        <Link
          to="/settings"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap py-2"
        >
          <div className="items-center box-border caret-transparent text-neutral-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-10.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-medium min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Settings
            </div>
          </div>
        </Link>
        <span className="box-border caret-transparent block basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] no-underline"></span>
        <Link
          to="/resource-hub"
          className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 relative no-underline text-nowrap -mr-2.5 py-2"
        >
          <div className="items-center box-border caret-transparent text-neutral-700 flex outline-[3px] no-underline text-nowrap px-2.5 py-1.5 rounded-md">
            <img
              src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-11.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[15.75px] outline-[3px] no-underline text-nowrap w-[15.75px] mr-2 md:block"
            />
            <div className="box-border caret-transparent font-medium min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-0 before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:invisible before:border-separate before:font-inter">
              Resource hub
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};
