// "use client";
// import React, { useEffect, useState } from "react";

// export const ToggleTheme = () => {
//   const [theme, setTheme] = useState(
//     () =>
//       localStorage.getItem("theme") ||
//       (window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light"),
//   );

//   useEffect(() => {
//     if (theme === "dark") {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   return (
//     <div>
//       {theme === "light" && (
//         <button type="button" onClick={() => setTheme("dark")}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 24 24"
//             className="lg:h-[30px] lg:w-[30px] w-[26px] h-[26px] mt-2 lg:mt-0 fill-gray-600"
//           >
//             <path d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
//           </svg>
//         </button>
//       )}
//       {theme === "dark" && (
//         <button type="button" onClick={() => setTheme("light")}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 256 256"
//             className="lg:h-[30px] lg:w-[30px] w-[26px] h-[26px] mt-2 lg:mt-0 fill-white"
//           >
//             <path d="M116 36V20a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 92a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM48 128a12 12 0 0 0-12-12H20a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m80 80a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m108-92h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };

"use client";
import React, { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div>
      {theme === "light" && (
        <button type="button" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="lg:h-[30px] lg:w-[30px] w-[26px] h-[26px] mt-2 lg:mt-0 fill-gray-600"
          >
            <path d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
          </svg>
        </button>
      )}
      {theme === "dark" && (
        <button type="button" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="lg:h-[30px] lg:w-[30px] w-[26px] h-[26px] mt-2 lg:mt-0 fill-white"
          >
            <path d="M116 36V20a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 92a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM48 128a12 12 0 0 0-12-12H20a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m80 80a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m108-92h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
          </svg>
        </button>
      )}
    </div>
  );
};
