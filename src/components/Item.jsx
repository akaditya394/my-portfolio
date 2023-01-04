import React from "react";

const Item = (props) => {
  return (
    <div>
      <img
        src={props.src}
        alt={props.name}
        className="object-contain h-20 mx-auto cursor-pointer rounded-lg"
      />
      <p className="text-sm text-[#4d5156] cursor-pointer">{props.name}</p>
      <p className="text-sm text-[#4d5156]">{props.time}</p>
    </div>
  );
};

export default Item;
