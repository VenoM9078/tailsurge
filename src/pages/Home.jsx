import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  const [items, setItems] = useState(1);
  const [defaultColumn, setDefaultColumns] = useState(1);
  const [defaultGap, setDefaultGap] = useState(0);
  const width = ["full", "1/2", "1/3", "1/4", "1/5", "1/6"];
  const gaps = [
    "gap-0",
    "gap-px",
    "gap-0.5",
    "gap-1",
    "gap-1.5",
    "gap-2",
    "gap-2.5",
    "gap-3",
    "gap-3.5",
    "gap-4",
    "gap-5",
    "gap-6",
  ];

  const itemsHandler = (e) => {
    setItems(e.target.value);
  };

  const defaultColumnHandler = (e) => {
    setDefaultColumns(e.target.value);
  };

  const defaultGapHandler = (e) => {
    setDefaultGap(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <img
        src="https://www.useblackbox.io/style/images/bg-shape-006-p-2000.png"
        alt=""
        className="absolute opacity-50 top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <div className="mb-12 pt-40 md:mb-20 md:pt-40 lg:w-9/12 lg:mx-auto">
            <h1
              style={{ fontFamily: "Unbounded" }}
              className="text-slate-900 text-center pb-5 text-5xl w-full font-bold sm:text-4xl md:text-5xl"
            >
              Create Stunning{" "}
              <span className="inline bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Layouts
              </span>{" "}
              with Ease using{" "}
              <span className="inline bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                TailSurge
              </span>
            </h1>

            <div className="flex justify-center mx-auto">
              <a
                className="rounded-full bg-slate-900 mt-5 py-4 px-6 text-md font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                href="https://github.com/VenoM9078/tailsurge"
              >
                ⭐ on GitHub
              </a>
            </div>

            <hr className="w-full h-1 mx-auto my-4 opacity-20 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

            <div className="mt-10 pt-5">
              <h1
                style={{ fontFamily: "Inter" }}
                className="text-slate-900 text-left pb-5 text-2xl w-full font-bold sm:text-2xl md:text-3xl"
              >
                Grid Options
              </h1>

              <div className="flex justify-center items-center pb-2 pt-5">
                <h1
                  style={{ fontFamily: "Inter" }}
                  className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                >
                  Items
                </h1>
              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={items}
                className="range"
                onChange={itemsHandler}
                step="1"
              />

              <div className="flex justify-center items-center pb-2 pt-5">
                <h1
                  style={{ fontFamily: "Inter" }}
                  className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                >
                  Default Columns
                </h1>
              </div>

              <input
                type="range"
                min="1"
                max="6"
                value={defaultColumn}
                className="range"
                onChange={defaultColumnHandler}
                step="1"
              />

              <div className="flex justify-center items-center pb-2 pt-5">
                <h1
                  style={{ fontFamily: "Inter" }}
                  className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                >
                  Default Gap
                </h1>
              </div>

              <input
                type="range"
                min="0"
                max="11"
                value={defaultGap}
                className="range"
                onChange={defaultGapHandler}
                step="1"
              />

              <div className={`flex flex-wrap overflow-hidden mt-5`}>
                {Array.from({ length: items }, (_, index) => (
                  <div
                    key={index}
                    className={`w-${width[defaultColumn - 1]} my-1 px-1`}
                  >
                    <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                  </div>
                ))}
              </div>
              <div className="text-left mt-10">
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="html"
                  style={atomOneDark}
                >
                  {`<div className="flex flex-wrap overflow-hidden">${Array.from(
                    { length: items },
                    (_, index) =>
                      `\n <div className="w-${width[defaultColumn - 1]}"></div>`
                  ).join("")}
</div>`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full p-4 mt-5 bg-slate-900">
          <div className="relative container m-auto px-6 md:px-12 lg:px-6">
            <FormSection />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
