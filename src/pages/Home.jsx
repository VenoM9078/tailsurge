import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  const [items, setItems] = useState(1);
  const [activeTab, setActiveTab] = useState("Tab 1");

  const [defaultColumn, setDefaultColumns] = useState(1);
  const [defaultGap, setDefaultGap] = useState(0);

  const [mobileColumn, setMobileColumn] = useState(1);
  const [mobileGap, setMobileGap] = useState(0);

  const [tabletColumn, setTabletColumn] = useState(1);
  const [tabletGap, setTabletGap] = useState(0);

  const [laptopColumn, setLaptopColumn] = useState(1);
  const [laptopGap, setLaptopGap] = useState(0);

  const [desktopColumn, setDesktopColumn] = useState(1);
  const [desktopGap, setDesktopGap] = useState(0);

  const width = ["full", "1/2", "1/3", "1/4", "1/5", "1/6"];

  const itemsHandler = (e) => {
    setItems(e.target.value);
  };

  const defaultColumnHandler = (e) => {
    setDefaultColumns(e.target.value);
  };

  const defaultGapHandler = (e) => {
    setDefaultGap(e.target.value);
  };

  const mobileColumnHandler = (e) => {
    setMobileColumn(e.target.value);
  };

  const mobileGapHandler = (e) => {
    setMobileGap(e.target.value);
  };

  const tabletColumnHandler = (e) => {
    setTabletColumn(e.target.value);
  };

  const tabletGapHandler = (e) => {
    setTabletGap(e.target.value);
  };

  const laptopColumnHandler = (e) => {
    setLaptopColumn(e.target.value);
  };

  const laptopGapHandler = (e) => {
    setLaptopGap(e.target.value);
  };

  const desktopColumnHandler = (e) => {
    setDesktopColumn(e.target.value);
  };

  const desktopGapHandler = (e) => {
    setDesktopGap(e.target.value);
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
                target="_blank"
                className="rounded-full bg-sky-500 mt-5 mr-2 py-4 px-6 text-md font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                href="https://twitter.com/intent/tweet?text=Hey%20Tailwind%20developers!%20Make%20crafting%20layouts%20a%20breeze%20with%20TailSurge%20%F0%9F%92%A8%20Check%20it%20out%20now%20and%20simplify%20your%20front-end%20game!%20%23TailwindCSS%20%23TailSurge"
              >
                <div className="flex flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Tweet About Us
                </div>
              </a>

              <a
                target="_blank"
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

              <div className="tabs tabs-boxed justify-center mx-auto my-5 rounded-full ">
                <a
                  className={`tab ${
                    activeTab === "Tab 1" ? "tab-active" : ""
                  } font-bold  text-lg `}
                  onClick={() => setActiveTab("Tab 1")}
                >
                  Default
                </a>
                <a
                  className={`tab ${
                    activeTab === "Tab 2" ? "tab-active" : ""
                  } font-bold  text-lg`}
                  onClick={() => setActiveTab("Tab 2")}
                >
                  Mobile
                </a>

                <a
                  className={`tab ${
                    activeTab === "Tab 3" ? "tab-active" : ""
                  } font-bold text-lg`}
                  onClick={() => setActiveTab("Tab 3")}
                >
                  Tablet
                </a>

                <a
                  className={`tab ${
                    activeTab === "Tab 4" ? "tab-active" : ""
                  } font-bold text-lg`}
                  onClick={() => setActiveTab("Tab 4")}
                >
                  Laptop
                </a>

                <a
                  className={`tab ${
                    activeTab === "Tab 5" ? "tab-active" : ""
                  } font-bold text-lg`}
                  onClick={() => setActiveTab("Tab 5")}
                >
                  Desktop
                </a>
              </div>
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
              {activeTab === "Tab 1" && (
                <div id="Tab1">
                  {" "}
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
                    max="5"
                    value={defaultGap}
                    className="range"
                    onChange={defaultGapHandler}
                    step="1"
                  />
                  <div className={`flex flex-wrap overflow-hidden mt-5`}>
                    {Array.from({ length: items }, (_, index) => (
                      <div
                        key={index}
                        id={`block-${index}`}
                        style={{ width: `${100 / defaultColumn}%` }}
                        className={`w-${width[defaultColumn - 1]} ${
                          defaultGap > 0 ? "px-1 my-1" : ""
                        } sm:w-${width[mobileColumn - 1]} ${
                          mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                        } md:w-${width[tabletColumn - 1]} ${
                          tabletGap > 0 ? "md:px-1 md:my-1" : ""
                        } lg:w-${width[laptopColumn - 1]} ${
                          laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                        } xl:w-${width[desktopColumn - 1]} ${
                          desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                        }`}
                      >
                        <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Tab 2" && (
                <div id="Tab2">
                  {" "}
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Mobile View Columns
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={mobileColumn}
                    className="range"
                    onChange={mobileColumnHandler}
                    step="1"
                  />
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Mobile View Gap
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={mobileGap}
                    className="range"
                    onChange={mobileGapHandler}
                    step="1"
                  />
                  <div className={`flex flex-wrap overflow-hidden mt-5`}>
                    {Array.from({ length: items }, (_, index) => (
                      <div
                        key={index}
                        id={`block-${index}`}
                        style={{ width: `${100 / mobileColumn}%` }}
                        className={`w-${width[defaultColumn - 1]} ${
                          defaultGap > 0 ? "px-1 my-1" : ""
                        } sm:w-${width[mobileColumn - 1]} ${
                          mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                        } md:w-${width[tabletColumn - 1]} ${
                          tabletGap > 0 ? "md:px-1 md:my-1" : ""
                        } lg:w-${width[laptopColumn - 1]} ${
                          laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                        } xl:w-${width[desktopColumn - 1]} ${
                          desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                        }`}
                      >
                        <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Tab 3" && (
                <div id="Tab3">
                  {" "}
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Tablet View Columns
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={tabletColumn}
                    className="range"
                    onChange={tabletColumnHandler}
                    step="1"
                  />
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Tablet View Gap
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={tabletGap}
                    className="range"
                    onChange={tabletGapHandler}
                    step="1"
                  />
                  <div className={`flex flex-wrap overflow-hidden mt-5`}>
                    {Array.from({ length: items }, (_, index) => (
                      <div
                        key={index}
                        id={`block-${index}`}
                        style={{ width: `${100 / tabletColumn}%` }}
                        className={`w-${width[defaultColumn - 1]} ${
                          defaultGap > 0 ? "px-1 my-1" : ""
                        } sm:w-${width[mobileColumn - 1]} ${
                          mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                        } md:w-${width[tabletColumn - 1]} ${
                          tabletGap > 0 ? "md:px-1 md:my-1" : ""
                        } lg:w-${width[laptopColumn - 1]} ${
                          laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                        } xl:w-${width[desktopColumn - 1]} ${
                          desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                        }`}
                      >
                        <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Tab 4" && (
                <div id="Tab4">
                  {" "}
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Laptop View Columns
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={laptopColumn}
                    className="range"
                    onChange={laptopColumnHandler}
                    step="1"
                  />
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Laptop View Gap
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={laptopGap}
                    className="range"
                    onChange={laptopGapHandler}
                    step="1"
                  />
                  <div className={`flex flex-wrap overflow-hidden mt-5`}>
                    {Array.from({ length: items }, (_, index) => (
                      <div
                        key={index}
                        id={`block-${index}`}
                        style={{ width: `${100 / laptopColumn}%` }}
                        className={`w-${width[defaultColumn - 1]} ${
                          defaultGap > 0 ? "px-1 my-1" : ""
                        } sm:w-${width[mobileColumn - 1]} ${
                          mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                        } md:w-${width[tabletColumn - 1]} ${
                          tabletGap > 0 ? "md:px-1 md:my-1" : ""
                        } lg:w-${width[laptopColumn - 1]} ${
                          laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                        } xl:w-${width[desktopColumn - 1]} ${
                          desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                        }`}
                      >
                        <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Tab 5" && (
                <div id="Tab5">
                  {" "}
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Desktop View Columns
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={desktopColumn}
                    className="range"
                    onChange={desktopColumnHandler}
                    step="1"
                  />
                  <div className="flex justify-center items-center pb-2 pt-5">
                    <h1
                      style={{ fontFamily: "Inter" }}
                      className="text-slate-900 text-left ml-2  text-xl w-full font-bold sm:text-2xl md:text-xl"
                    >
                      Desktop View Gap
                    </h1>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={desktopGap}
                    className="range"
                    onChange={desktopGapHandler}
                    step="1"
                  />
                  <div className={`flex flex-wrap overflow-hidden mt-5`}>
                    {Array.from({ length: items }, (_, index) => (
                      <div
                        key={index}
                        id={`block-${index}`}
                        style={{ width: `${100 / desktopColumn}%` }}
                        className={`w-${width[defaultColumn - 1]} ${
                          defaultGap > 0 ? "px-1 my-1" : ""
                        } sm:w-${width[mobileColumn - 1]} ${
                          mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                        } md:w-${width[tabletColumn - 1]} ${
                          tabletGap > 0 ? "md:px-1 md:my-1" : ""
                        } lg:w-${width[laptopColumn - 1]} ${
                          laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                        } xl:w-${width[desktopColumn - 1]} ${
                          desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                        }`}
                      >
                        <div className="bg-indigo-900 rounded-lg h-12 p-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-left mt-10">
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="html"
                  style={atomOneDark}
                >
                  {`<div className="flex flex-wrap overflow-hidden">${Array.from(
                    { length: items },
                    (_, index) =>
                      `\n <div className="w-${width[defaultColumn - 1]} ${
                        defaultGap > 0 ? "px-1 my-1" : ""
                      } sm:w-${width[mobileColumn - 1]} ${
                        mobileGap > 0 ? "sm:px-1 sm:my-1" : ""
                      } md:w-${width[tabletColumn - 1]} ${
                        tabletGap > 0 ? "md:px-1 md:my-1" : ""
                      } lg:w-${width[laptopColumn - 1]} ${
                        laptopGap > 0 ? "lg:px-1 lg:my-1" : ""
                      } xl:w-${width[desktopColumn - 1]} ${
                        desktopGap > 0 ? "xl:px-1 xl:my-1" : ""
                      }"></div>`
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
