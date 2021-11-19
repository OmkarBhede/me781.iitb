import React from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import TinderCard from "react-tinder-card";

import boy1 from "./assets/boy/1.png";
import boy2 from "./assets/boy/2.png";
import boy3 from "./assets/boy/3.png";
import boy4 from "./assets/boy/4.png";
import boy5 from "./assets/boy/5.png";

import girl1 from "./assets/girl/1.png";
import girl2 from "./assets/girl/2.png";
import girl3 from "./assets/girl/3.png";
import girl4 from "./assets/girl/4.png";
import girl5 from "./assets/girl/5.png";

const boys = [boy1, boy2, boy3, boy4, boy5];
const girls = [girl1, girl2, girl3, girl4, girl5];

const ResultsCards = () => {
  // ...

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const results = [{ name: "omkar" }, { name: "vishal" }];
  return (
    <div>
      <div className="min-w-screen min-h-screen wave-bg flex items-center justify-center px-5 py-5 ">
        <div className="w-full h-full ">
          {results.map((e) => (
            <TinderCard
              key={e.name}
              onSwipe={(dir) => swiped(dir, e.name)}
              onCardLeftScreen={() => outOfFrame(e.name)}
            >
              <div className="bg-gray-100 text-gray-500 pt-10 pb-6 px-5 md:px-10 rounded-3xl shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   overflow-hidden ">
                <div className="absolute  top-3 right-5 ">
                  <div className="flex flex-col items-center justify-center">
                    <FaHeart className="text-red-500 text-3xl"></FaHeart>
                    <div className="text-sm font-extrabold ">50 %</div>
                  </div>
                </div>
                <div className="text-center mb-8">
                  <div className="flex justify-center py-4">
                    <div className="flex bg-purple-200 rounded-full md:p-2 p-2 border-2 border-purple-300">
                      <img
                        className="w-20 h-20 "
                        src={girls[Math.floor(Math.random() * girls.length)]}
                      ></img>
                    </div>
                  </div>
                  <h1 className="font-bold text-3xl pb-4 text-gray-900">
                    {e.name}
                  </h1>
                  <p>*above data is just for visualization purposes.</p>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsCards;
