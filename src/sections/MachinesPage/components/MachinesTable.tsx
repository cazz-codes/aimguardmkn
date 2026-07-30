export const MachinesTable = () => {
  return (
    <table className="caret-transparent block outline-[3px] no-underline border-collapse">
      <thead className="box-border caret-transparent text-neutral-500 block text-xs font-semibold tracking-[0.6px] leading-[15.9996px] outline-[3px] text-left no-underline uppercase">
        <tr className="box-border caret-transparent flex outline-[3px] no-underline align-middle border-gray-200 border-b border-solid">
          <th className="box-border caret-transparent block grow shrink-0 font-bold min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis align-middle w-0 py-2 md:grow-0 md:w-[33.3333%]">
            Machine
          </th>
          <th className="box-border caret-transparent hidden shrink-0 font-bold min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-3/12">
            <span className="items-center box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 no-underline">
              Addresses
              <span className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 outline-[3px] no-underline w-3.5"
                />
              </span>
            </span>
          </th>
          <th className="box-border caret-transparent hidden shrink-0 font-bold min-h-0 min-w-0 outline-[3px] no-underline align-middle w-3/12 px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-1/5">
            Version
          </th>
          <th className="box-border caret-transparent hidden grow-0 shrink-0 font-bold min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:grow md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
            Last Seen
          </th>
          <th className="box-border caret-transparent flex shrink-0 font-bold justify-end min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-middle w-[16.6667%] ml-auto px-1 py-2 md:w-12 md:ml-0"></th>
        </tr>
      </thead>
      <tbody className="box-border caret-transparent block outline-[3px] no-underline">
        <tr className="box-border caret-transparent flex outline-[3px] no-underline align-middle w-full border-gray-200 px-0.5 border-b border-solid">
          <td className="box-border caret-transparent block grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis align-middle w-0 py-2 md:grow-0 md:w-[33.3333%]">
            <div className="box-border caret-transparent outline-[3px] relative no-underline">
              <div className="items-center box-border caret-transparent outline-[3px] no-underline">
                <p className="box-border caret-transparent font-semibold outline-[3px] no-underline">
                  <span className="bg-emerald-500 box-border caret-transparent inline-block h-2 outline-[3px] relative no-underline w-2 mr-2 rounded-full -top-px md:hidden"></span>
                  <a
                    aria-label="Detail view for bool"
                    href="#"
                    className="box-border caret-transparent outline-[3px] no-underline before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-full before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-collapse before:left-0 before:top-0 before:font-inter"
                  >
                    bool
                  </a>
                </p>
                <div className="box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 no-underline text-ellipsis text-nowrap overflow-hidden md:hidden">
                  2 addresses
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap md:inline md:min-h-0 md:min-w-0">
                    ·
                  </span>
                  <span
                    title="1.98.9-t4fb758c39-g200941d74"
                    className="box-border caret-transparent text-neutral-500 block min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap md:hidden md:min-h-0 md:min-w-0"
                  >
                    Windows
                  </span>
                </div>
              </div>
              <div className="box-border caret-transparent outline-[3px] no-underline">
                <div className="items-center box-border caret-transparent flex outline-[3px] no-underline">
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                    lk07062005@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline my-1">
              <div className="box-border caret-transparent outline-[3px] no-underline"></div>
            </div>
          </td>
          <td className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-3/12">
            <button
              aria-label="See all addresses for this device."
              type="button"
              className="items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-neutral-400 gap-x-1 inline-flex justify-start leading-[21px] max-w-[85%] outline-[3px] pointer-events-none relative gap-y-1 text-center no-underline text-nowrap align-top p-0 rounded-md"
            >
              <span className="box-border caret-transparent block max-w-full min-h-0 min-w-0 outline-[3px] no-underline text-nowrap md:min-h-[auto] md:min-w-[auto]">
                <span className="box-border caret-transparent outline-[3px] no-underline text-nowrap">
                  100.123.248.50
                </span>
              </span>
              <span className="box-border caret-transparent block shrink-0 min-h-0 min-w-0 outline-[3px] no-underline text-nowrap md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-15.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
                />
              </span>
            </button>
          </td>
          <td className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-3/12 px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-1/5">
            <div className="items-center box-border caret-transparent flex outline-[3px] relative no-underline">
              <div className="box-border caret-transparent outline-[3px] absolute no-underline -left-6 top-0.5">
                <a
                  href="#"
                  className="box-border caret-transparent outline-[3px] no-underline"
                >
                  <img
                    src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-18.svg"
                    alt="Icon"
                    className="box-border caret-transparent text-neutral-400 h-[15.75px] outline-[3px] no-underline w-[15.75px]"
                  />
                </a>
              </div>
              <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
                1.98.9
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
              Windows{" "}
              <span className="box-border caret-transparent outline-[3px] no-underline text-nowrap">
                11 25H2
              </span>
            </div>
          </td>
          <td className="box-border caret-transparent hidden grow-0 shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:grow md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
            <span className="box-border caret-transparent outline-[3px] no-underline">
              <span className="bg-emerald-500 box-border caret-transparent inline-block h-2 outline-[3px] no-underline w-2 mr-2 rounded-full"></span>
              Connected
            </span>
          </td>
          <td className="items-center box-border caret-transparent flex shrink-0 justify-end justify-items-end min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-middle w-[16.6667%] ml-auto px-1 py-2 md:items-start md:w-12 md:ml-0">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline -mt-0.5">
              <button
                aria-label="Actions for bool"
                type="button"
                className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent outline-[3px] no-underline align-top z-50 border px-2 py-0.5 rounded-md border-transparent hover:bg-stone-50 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-neutral-300"
              >
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-19.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-500 h-6 outline-[3px] no-underline w-6"
                />
              </button>
            </div>
          </td>
        </tr>
        <tr className="box-border caret-transparent flex outline-[3px] no-underline align-middle w-full border-gray-200 px-0.5 border-b border-solid">
          <td className="box-border caret-transparent block grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis align-middle w-0 py-2 md:grow-0 md:w-[33.3333%]">
            <div className="box-border caret-transparent outline-[3px] relative no-underline">
              <div className="items-center box-border caret-transparent outline-[3px] no-underline">
                <p className="box-border caret-transparent font-semibold outline-[3px] no-underline">
                  <span className="bg-emerald-500 box-border caret-transparent inline-block h-2 outline-[3px] relative no-underline w-2 mr-2 rounded-full -top-px md:hidden"></span>
                  <a
                    aria-label="Detail view for tecno-spark-8"
                    href="#"
                    className="box-border caret-transparent outline-[3px] no-underline before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-full before:tracking-[-0.21px] before:leading-[20.0004px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-collapse before:left-0 before:top-0 before:font-inter"
                  >
                    tecno-spark-8
                  </a>
                </p>
                <div className="box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 no-underline text-ellipsis text-nowrap overflow-hidden md:hidden">
                  2 addresses
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap md:inline md:min-h-0 md:min-w-0">
                    ·
                  </span>
                  <span
                    title="1.98.8-t1241b225b-gbcbaf1889"
                    className="box-border caret-transparent text-neutral-500 block min-h-[auto] min-w-[auto] outline-[3px] no-underline text-nowrap md:hidden md:min-h-0 md:min-w-0"
                  >
                    Android
                  </span>
                </div>
              </div>
              <div className="box-border caret-transparent outline-[3px] no-underline">
                <div className="items-center box-border caret-transparent flex outline-[3px] no-underline">
                  <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                    lk07062005@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline my-1">
              <div className="box-border caret-transparent outline-[3px] no-underline"></div>
            </div>
          </td>
          <td className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-3/12">
            <button
              aria-label="See all addresses for this device."
              type="button"
              className="items-center bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent text-neutral-400 gap-x-1 inline-flex justify-start leading-[21px] max-w-[85%] outline-[3px] pointer-events-none relative gap-y-1 text-center no-underline text-nowrap align-top p-0 rounded-md"
            >
              <span className="box-border caret-transparent block max-w-full min-h-0 min-w-0 outline-[3px] no-underline text-nowrap md:min-h-[auto] md:min-w-[auto]">
                <span className="box-border caret-transparent outline-[3px] no-underline text-nowrap">
                  100.112.168.46
                </span>
              </span>
              <span className="box-border caret-transparent block shrink-0 min-h-0 min-w-0 outline-[3px] no-underline text-nowrap md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-15.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[17.9999px] outline-[3px] no-underline text-nowrap w-[17.9999px]"
                />
              </span>
            </button>
          </td>
          <td className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-3/12 px-1 py-2 md:block md:min-h-[auto] md:min-w-[auto] md:w-1/5">
            <div className="items-center box-border caret-transparent flex outline-[3px] relative no-underline">
              <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
                1.98.8
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
              Android 11
            </div>
          </td>
          <td className="box-border caret-transparent hidden grow-0 shrink-0 min-h-0 min-w-0 outline-[3px] no-underline align-middle w-auto px-1 py-2 md:block md:grow md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
            <span className="box-border caret-transparent outline-[3px] no-underline">
              <span className="bg-emerald-500 box-border caret-transparent inline-block h-2 outline-[3px] no-underline w-2 mr-2 rounded-full"></span>
              Connected
            </span>
          </td>
          <td className="items-center box-border caret-transparent flex shrink-0 justify-end justify-items-end min-h-[auto] min-w-[auto] outline-[3px] relative no-underline align-middle w-[16.6667%] ml-auto px-1 py-2 md:items-start md:w-12 md:ml-0">
            <div className="items-stretch bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] relative no-underline border border-neutral-300 -mt-0.5 rounded-md border-solid">
              <button
                aria-label="Share tecno-spark-8"
                className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline align-top px-2 py-0 rounded-l-md hover:bg-stone-100"
              >
                Share…
              </button>
              <button
                aria-label="Actions for tecno-spark-8"
                type="button"
                className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline align-top z-50 px-2 py-0.5 rounded-r-md border-l border-transparent hover:bg-stone-50 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:border-neutral-300"
              >
                <img
                  src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-19.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-500 h-6 outline-[3px] no-underline w-6"
                />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
