import React from "react";

interface GenericListProps {
  items: string[];
  title: string;
  listItemClassName?: string;
}

const GenericList: React.FC<GenericListProps> = ({ items, title, listItemClassName }) => {
  return (
    <div>
      {items.length > 0 && (
        <>
          <h2 className="text-xl mb-4">{title}</h2>
          <ul className={`space-y-2 ${listItemClassName ? listItemClassName : ""}`}>
            {items.map((item, index) => (
              <li key={index} className={listItemClassName ? listItemClassName : "bg-white shadow rounded p-4"}>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GenericList;
