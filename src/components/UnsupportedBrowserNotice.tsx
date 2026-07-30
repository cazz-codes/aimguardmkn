export const UnsupportedBrowserNotice = () => {
  return (
    <div className="items-center box-border caret-transparent hidden justify-center min-h-[1000px] outline-[3px] no-underline py-10">
      <div className="box-border caret-transparent max-w-md outline-[3px] no-underline">
        <h3 className="box-border caret-transparent text-base font-semibold leading-[22px] outline-[3px] no-underline mb-4">
          Your web browser is unsupported.
        </h3>
        <p className="box-border caret-transparent outline-[3px] no-underline mb-2">
          Update to a modern browser to access the admin panel. You can use
          <a
            href="#"
            className="box-border caret-transparent text-indigo-700 outline-[3px] decoration-indigo-200 underline underline-offset-4 hover:decoration-indigo-500"
          >
            Firefox
          </a>
          ,
          <a
            href="#"
            className="box-border caret-transparent text-indigo-700 outline-[3px] decoration-indigo-200 underline underline-offset-4 hover:decoration-indigo-500"
          >
            Edge
          </a>
          , Safari, or{" "}
          <a
            href="#"
            className="box-border caret-transparent text-indigo-700 outline-[3px] decoration-indigo-200 underline underline-offset-4 hover:decoration-indigo-500"
          >
            Chrome
          </a>
          .
        </p>
        <p className="box-border caret-transparent outline-[3px] no-underline">
          If you need any help, feel free{" "}
          <a
            href="#"
            className="box-border caret-transparent text-indigo-700 outline-[3px] decoration-indigo-200 underline underline-offset-4 hover:decoration-indigo-500"
          >
            to contact us
          </a>
        </p>
      </div>
    </div>
  );
};
