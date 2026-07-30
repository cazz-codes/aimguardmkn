export const AddDevicesPanel = () => {
  return (
    <div className="bg-white bg-[linear-gradient(rgb(255,255,255),rgb(247,245,244))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.03)_0px_4px_12px_0px] box-border caret-transparent outline-[3px] relative no-underline border border-gray-200 overflow-hidden p-5 rounded-xl border-solid">
      <button
        aria-label="Minimize"
        className="items-center aspect-square bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-neutral-400 gap-x-2 flex font-medium h-9 justify-center leading-[14px] outline-[3px] pointer-events-none absolute gap-y-2 text-center no-underline text-nowrap align-top z-30 border px-0 py-2 rounded-md border-transparent right-2 top-2 hover:bg-stone-100"
      >
        <span className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
          <img
            src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-20.svg"
            alt="Icon"
            className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
          />
        </span>
      </button>
      <div className="box-border caret-transparent outline-[3px] relative no-underline z-20">
        <h3 className="box-border caret-transparent text-base font-semibold leading-[22px] outline-[3px] no-underline mb-2">
          Add devices to your network
        </h3>
        <p className="box-border caret-transparent outline-[3px] no-underline">
          Tailscale works best when it’s installed on multiple devices. Explore
          what you can do with Tailscale in these environments.
        </p>
        <div className="box-border caret-transparent flex flex-wrap outline-[3px] no-underline">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-8 mt-4">
            <h4 className="box-border caret-transparent text-neutral-500 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-1">
              Operating systems
            </h4>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <div className="items-center bg-emerald-500 box-border caret-transparent text-white flex h-4 justify-center outline-[3px] no-underline text-nowrap w-4 rounded-full">
                  <img
                    src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-21.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3 outline-[3px] no-underline text-nowrap w-3"
                  />
                </div>
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Windows
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-23.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Linux
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-24.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Mac
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent text-neutral-500 block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                See more
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline mr-8 mt-4">
            <h4 className="box-border caret-transparent text-neutral-500 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-1">
              Cloud providers
            </h4>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-25.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Add AWS VM
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-26.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Microsoft Azure
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-27.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] no-underline text-nowrap w-[18px]"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Google Cloud Platform
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent text-neutral-500 block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                See more
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-4">
            <h4 className="box-border caret-transparent text-neutral-500 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-1">
              Containers
            </h4>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-28.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Docker
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
            <a
              href="#"
              className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_1px_0px] box-border caret-transparent gap-x-2 flex font-medium justify-center leading-[14px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] relative gap-y-2 text-left no-underline text-nowrap w-64 border border-neutral-300 my-1 px-4 py-2 rounded-lg border-solid hover:bg-stone-50"
            >
              <span className="box-border caret-transparent block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-29.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 outline-[3px] no-underline text-nowrap w-5"
                />
              </span>
              <span className="box-border caret-transparent block basis-[0%] grow font-normal min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                Kubernetes
              </span>
              <span className="box-border caret-transparent text-neutral-500 block shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 outline-[3px] no-underline text-nowrap w-6"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent h-full outline-[3px] absolute no-underline w-full left-0 top-0">
        <img
          src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-30.svg"
          alt="Icon"
          className="bottom-[-370px] box-border caret-transparent h-[470px] left-[-150px] outline-[3px] absolute no-underline w-[471px] z-10"
        />
        <img
          src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-31.svg"
          alt="Icon"
          className="box-border caret-transparent hidden h-[391px] outline-[3px] absolute right-[-30px] no-underline top-[-250px] w-[587px] z-10 md:block"
        />
      </div>
    </div>
  );
};
