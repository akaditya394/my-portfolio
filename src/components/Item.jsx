import React from "react";

const Item = (props) => {
  return (
    <div>
      <a href={props.link}>
        <img
          src={props.src}
          alt={props.name}
          className="object-contain h-20 mx-auto cursor-pointer rounded-lg"
        />
      </a>
      <p className="text-sm text-[#4d5156] cursor-pointer">
        <a href={props.link}>{props.name}</a>
      </p>
      <p className="text-sm text-[#4d5156]">{props.time}</p>
    </div>
  );
};

export default Item;
