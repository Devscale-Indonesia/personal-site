import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-[1080px] w-full border border-t border-l-0 border-r-0 border-b-0 dark:border-neutral-500 lg:px-16 lg:py-8 py-3">
        <p className="text-center text-gray-500 dark:text-white">
          <span className="font-semibold">&copy;Devscale.</span> Build with
        </p>
      </div>
    </footer>
  );
};
