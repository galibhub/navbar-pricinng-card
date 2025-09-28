import React from "react";

const Link = ({ route }) => {
  return (
    <ul >
      <li className="px-4 mt-2 lg:mr-10  hover:bg-amber-400">
        <a href={route.path}>{route.name}</a>
      </li>
    </ul>
  );
};

export default Link;
