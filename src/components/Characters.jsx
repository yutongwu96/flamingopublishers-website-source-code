import React from "react";
import momImg from "../images/jenny-lin-mom.png";
import jennyImg from "../images/jenny-lin.png";
import dadImg from "../images/jenny-lin-dad.png";

const characters = [
  { name: "Mom", image: momImg },
  { name: "Jenny Lin", image: jennyImg },
  { name: "Dad", image: dadImg },
];

const Characters = () => {
  return (
    <section className="flex flex-row justify-evenly items-center py-10 max-w-5xl mx-auto w-full">
      {characters.map((char, index) => (
        <div key={index} className="text-center">
          <img
            src={char.image}
            alt={char.name}
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <p className="mt-3 text-base font-medium">{char.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Characters;
