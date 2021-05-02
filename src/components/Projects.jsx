import React, { useState } from "react";
import data from "../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <section className="py-24 px-5 bg-green-800 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:h-full lg:pt-30">
      {items.map((item) => {
        const { id, path, desc } = item;
        return (
          <div key={id}>
            <img
              src={path}
              alt={desc}
              className="p-2 bg-green-400 rounded"
              width="98%"
            />
            <span className="block text-center text-white font-semibold text-lg lg:mt-2">
              {desc}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
