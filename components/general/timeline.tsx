import React from "react";

const Timeline = () => {
  return (
    <div className="p-6 sm:p-10">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            March 14, 1879 - Invention of Quantum Computing
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            Scientists at a leading research institution
            unveil a groundbreaking breakthrough in quantum
            computing
          </div>
        </div>


        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            April 1, 1939 - First Quantum Computer
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            The first quantum computer is built by a team of
            researchers in a laboratory in the United
            States.
          </div>
        </div>

        
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            June 12, 1954 - Quantum Computing Research
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            A group of scientists in Europe publish a paper
            on quantum computing research.
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            December 31, 1979 - Quantum Computing
            Breakthrough
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            A team of researchers in Asia makes a
            significant breakthrough in quantum computing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
