import { useEffect, useRef, useState } from "react";

export const AccountHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppearanceOpen, setIsAppearanceOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuContainerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsAppearanceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header
      role="banner"
      className="items-center box-border caret-transparent gap-x-4 flex justify-between outline-[3px] gap-y-4 no-underline px-2 md:px-0"
    >
      <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] outline-[3px] gap-y-3 no-underline">
        <a
          aria-label="lk07062005@gmail.com admin console home"
          href="#"
          className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] outline-[3px] gap-y-3 no-underline"
        >
          <img
            src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent shrink-0 h-[18px] outline-[3px] no-underline w-[18px]"
          />
          <div className="box-border caret-transparent text-lg font-semibold leading-[21.9996px] min-h-[auto] min-w-[auto] outline-[3px] no-underline text-ellipsis text-nowrap overflow-hidden">
            lk07062005@gmail.com
          </div>
        </a>
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="items-center bg-gray-200 box-border caret-transparent text-neutral-700 inline-flex text-xs font-medium justify-center leading-[15.9996px] outline-[3px] no-underline align-middle border border-gray-200 px-1 rounded-sm border-solid">
            Free
          </div>
        </span>
      </div>
      <nav
        aria-label="External links"
        className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline"
      >
        <button
          aria-label="Help menu"
          title="Help and resources"
          type="button"
          className="items-center bg-transparent caret-transparent text-neutral-500 flex h-8 justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline align-top w-8 p-0 rounded-full hover:bg-gray-200"
        >
          <img
            src="https://c.animaapp.com/ms7jp9pzk0KYBc/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-[22px] outline-[3px] no-underline w-[22px]"
          />
        </button>
        <div
          ref={menuContainerRef}
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline"
        >
          <button
            aria-label="User menu"
            type="button"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              if (isMenuOpen) {
                setIsAppearanceOpen(false);
              }
            }}
            className="bg-transparent caret-transparent outline-[3px] relative no-underline align-top p-0 rounded-full"
          >
            <div className="box-border caret-transparent shrink-0 h-7 outline-[3px] relative no-underline w-7 overflow-hidden rounded-full">
              <div className="bg-[url('https://lh3.googleusercontent.com/a/ACg8ocI_kNtVFn7SE0eHJLA-Dn6WztV2GQWwWS8IuxRQTui5pG1pmg=s96-c')] bg-center bg-cover box-border caret-transparent h-full outline-[3px] no-underline w-full"></div>
              <div className="box-border caret-transparent h-full outline-[3px] absolute no-underline w-full rounded-full inset-0"></div>
            </div>
          </button>

          {isMenuOpen && (
            <div className="bg-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] absolute right-0 top-full z-50 no-underline mt-2 border border-gray-200 w-[240px] overflow-visible rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <div className="box-border caret-transparent outline-[3px] no-underline px-4 py-3 border-b border-gray-200 border-solid">
                <div className="box-border caret-transparent text-neutral-900 text-sm font-semibold leading-tight outline-[3px] no-underline uppercase">
                  LOKESH KUMAR
                </div>
                <div className="box-border caret-transparent text-neutral-500 text-sm leading-tight outline-[3px] no-underline mt-1">
                  lk07062005@gmail.com
                </div>
              </div>

              <div
                className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] relative no-underline"
                onMouseEnter={() => setIsAppearanceOpen(true)}
                onMouseLeave={() => setIsAppearanceOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsAppearanceOpen((prev) => !prev)}
                  className="items-center box-border caret-transparent text-neutral-900 flex text-sm justify-between leading-tight outline-[3px] no-underline w-full text-left px-4 py-3 hover:bg-gray-50"
                >
                  <span>Appearance</span>
                  <span className="text-neutral-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </span>
                </button>

                {isAppearanceOpen && (
                  <div className="bg-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] absolute right-full top-0 z-[60] no-underline mr-2 border border-gray-200 w-[240px] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-1">
                    <button
                      type="button"
                      className="items-center box-border caret-transparent text-neutral-900 flex text-sm gap-x-3 leading-tight outline-[3px] no-underline w-full text-left px-4 py-2 hover:bg-gray-50"
                    >
                      <span aria-hidden="true">🖥</span>
                      <span>Use system setting</span>
                    </button>
                    <button
                      type="button"
                      className="items-center box-border caret-transparent text-neutral-900 flex text-sm justify-between leading-tight outline-[3px] no-underline w-full text-left px-4 py-2 border-t border-gray-200 border-solid hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-x-3">
                        <span aria-hidden="true">☀</span>
                        <span>Light</span>
                      </span>
                      <span aria-hidden="true">✓</span>
                    </button>
                    <button
                      type="button"
                      className="items-center box-border caret-transparent text-neutral-900 flex text-sm gap-x-3 leading-tight outline-[3px] no-underline w-full text-left px-4 py-2 border-t border-gray-200 border-solid hover:bg-gray-50"
                    >
                      <span aria-hidden="true">◐</span>
                      <span>Dark</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="box-border caret-transparent text-neutral-900 text-sm leading-tight outline-[3px] no-underline w-full text-left px-4 py-3 border-t border-gray-200 border-solid hover:bg-gray-50"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
