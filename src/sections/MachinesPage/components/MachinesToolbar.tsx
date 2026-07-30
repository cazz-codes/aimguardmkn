export type MachinesToolbarProps = {
  variant: string;
  title: string;
  description: string;
  documentationHref: string;
  documentationAriaLabel: string;
  documentationText: string;
  addDeviceText: string;
  addDeviceIconSrc: string;
  addDeviceIconAlt: string;
  searchIconSrc: string;
  searchIconAlt: string;
  searchName: string;
  searchPlaceholder: string;
  searchValue: string;
  filtersIconSrc: string;
  filtersIconAlt: string;
  filtersText: string;
  filtersChevronIconSrc: string;
  filtersChevronIconAlt: string;
  filtersDocumentationHref: string;
  filtersDocumentationAriaLabel: string;
  filtersDocumentationText: string;
  exportAriaLabel: string;
  exportTitle: string;
  exportIconSrc: string;
  exportIconAlt: string;
  machineCountText: string;
};

export const MachinesToolbar = (props: MachinesToolbarProps) => {
  if (props.variant === "header") {
    return (
      <header className="box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 no-underline">
        <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap justify-between outline-[3px] gap-y-4 no-underline">
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline">
              <h1 className="box-border caret-transparent text-2xl font-semibold tracking-[-0.6px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                {props.title}
              </h1>
            </div>
          </div>
          <p className="box-border caret-transparent max-w-screen-sm outline-[3px] no-underline mt-2">
            {props.description}{" "}
            <a
              href="#"
              aria-label={props.documentationAriaLabel}
              className="box-border caret-transparent text-indigo-700 outline-[3px] decoration-indigo-200 underline underline-offset-4 text-nowrap hover:decoration-indigo-500"
            >
              {props.documentationText}
            </a>
          </p>
        </div>
        <div className="items-end box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <button
            type="button"
            className="items-center bg-indigo-400 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-indigo-200 gap-x-2 flex font-medium h-9 justify-start leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none relative gap-y-2 text-center no-underline text-nowrap align-top border border-indigo-400 px-3 py-0 rounded-md"
          >
            <span className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
              {props.addDeviceText}
            </span>
            <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
              <img
                src={props.addDeviceIconSrc}
                alt={props.addDeviceIconAlt}
                className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
              />
            </span>
          </button>
        </div>
      </header>
    );
  }

  if (props.variant === "filters") {
    return (
      <div className="box-border caret-transparent outline-[3px] no-underline gap-x-4 flex justify-start gap-y-4 my-6">
        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap outline-[3px] gap-y-2 no-underline md:flex-nowrap">
            <form className="box-border caret-transparent shrink-0 max-w-2xl min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:shrink">
              <div className="box-border caret-transparent outline-[3px] relative no-underline">
                <img
                  src={props.searchIconSrc}
                  alt={props.searchIconAlt}
                  className="box-border caret-transparent text-neutral-400 h-full outline-[3px] absolute no-underline w-[17.5px] ml-2"
                />
                <input
                  type="text"
                  name={props.searchName}
                  placeholder={props.searchPlaceholder}
                  value={props.searchValue}
                  className="appearance-none bg-stone-50 box-border caret-transparent h-9 tracking-[normal] leading-[17.5px] outline-[3px] no-underline w-full border border-neutral-300 px-8 py-0 rounded-md border-solid"
                  readOnly
                />
              </div>
            </form>
            <button
              type="button"
              className="items-center bg-stone-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-neutral-400 gap-x-2 flex shrink-0 font-medium h-9 justify-start leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none relative gap-y-2 text-center no-underline text-nowrap align-top border border-gray-200 px-3 py-0 rounded-md hover:bg-stone-100"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src={props.filtersIconSrc}
                  alt={props.filtersIconAlt}
                  className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
                />
              </span>
              <span className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                {props.filtersText}
              </span>
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src={props.filtersChevronIconSrc}
                  alt={props.filtersChevronIconAlt}
                  className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
                />
              </span>
            </button>
            <a
              href="#"
              aria-label={props.filtersDocumentationAriaLabel}
              className="box-border caret-transparent text-indigo-700 block min-h-[auto] min-w-[auto] outline-[3px] decoration-indigo-200 underline underline-offset-4 text-nowrap hover:decoration-indigo-500"
            >
              {props.filtersDocumentationText}
            </a>
          </div>
        </div>
        <div className="self-start box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto]">
          <button
            aria-label={props.exportAriaLabel}
            title={props.exportTitle}
            className="items-center aspect-square bg-stone-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-neutral-400 gap-x-2 inline-flex font-medium h-9 justify-center leading-[14px] outline-[3px] pointer-events-none relative gap-y-2 text-center no-underline text-nowrap align-top border border-gray-200 p-0 rounded-md hover:bg-stone-100"
          >
            <span className="box-border caret-transparent block max-w-full min-h-0 min-w-0 outline-[3px] no-underline text-nowrap md:min-h-[auto] md:min-w-[auto]">
              <img
                src={props.exportIconSrc}
                alt={props.exportIconAlt}
                className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
              />
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent outline-[3px] no-underline items-center bg-gray-200 text-neutral-700 inline-flex text-xs font-medium justify-center leading-3 align-middle border border-gray-200 mb-8 px-2 py-1 rounded-full border-solid">
      {props.machineCountText}
    </div>
  );
};
