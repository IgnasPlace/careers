import React from "react";

type Props = {
  fields: string[];
  action: (word: string) => void;
};

const Sugestions = (props: Props) => {
  const itemClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    let listItem = e.target as HTMLLIElement;
    if (listItem.textContent) {
      props.action(listItem.textContent);
    }
  };

  return (
    <div className="absolute w-5/6 right-0 top-16 max-h-72 rounded-3xl bg-colorWhite border-4 border-color1 box-shadow-custom">
      <ul className="m-2 max-h-64 overflow-auto my-custom-scroll-bar">
        {props.fields.map((job, idx) => {
          return (
            <li
              key={idx}
              onClick={itemClickHandler}
              className="p-2 mr-2 text-color1 cursor-pointer font-bold hover:bg-color2 rounded-md scroll"
            >
              {job}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sugestions;
