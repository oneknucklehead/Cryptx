import React from "react";

const Badge = ({ children }) => {
  return (
    <div>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {children}
      </span>
    </div>
  );
};

export default Badge;
