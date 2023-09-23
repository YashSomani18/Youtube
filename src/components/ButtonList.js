import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const names = [
    "All",
    "Kapil Sharma",
    "Movies",
    "Cricket",
    "Comedy",
    "Live",
    "Cooking",
    "Songs",
    "Soccer",
    "Dance",
  ];
  return (
    <div className="flex">
      {names.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
