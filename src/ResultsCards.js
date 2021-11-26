import React from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
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
const perLike = [
  [41, 39, 38],
  [48, 46, 44],
  [58, 53, 54],
  [60, 68, 69],
  [74, 78, 77],
];
const names = [
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];

const body_type = [
  "rather not say",
  " thin",
  " overweight",
  " skinny",
  " average",
  " fit",
  " athletic",
  " jacked",
  " a little extra",
  " curvy",
  " full figured",
  " used up",
];

const diet = [
  "anything",
  " vegetarian",
  " vegan",
  " kosher",
  " halal",
  " other",
];

const drinks = [
  "very often",
  " often",
  " socially",
  " rarely",
  " desperately",
  " not at all",
];

const drugs = ["never", " sometimes", " often"];

const education = [
  "graduated from",
  " working on",
  " dropped out of",
  " high school",
  " two=year college",
  " university",
  " masters program",
  " law school",
  " med school",
  " Ph.D program",
  " space camp",
];

const orientation = ["straight", " gay", " bisexual"];

const pets = [
  "has dogs",
  " likes dogs",
  " dislikes dogs",
  "has cats",
  " likes cats",
  " dislikes cats",
];

const religion = [
  "agnosticism",
  " atheism",
  " Christianity",
  " Judaism",
  " Catholicism",
  " Islam",
  " Hinduism",
  " Buddhism",
  " Other",
];

const sex = ["male", "female"];

const sign = [
  "aquarius",
  "pices",
  "aries",
  "Taurus",
  "Gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "saggitarius",
  "Capricorn",
];
const ResultsCards = () => {
  // ...

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const results = [
    { name: names[Math.floor(Math.random() * names.length)] },
    { name: names[Math.floor(Math.random() * names.length)] },
    { name: names[Math.floor(Math.random() * names.length)] },
    { name: names[Math.floor(Math.random() * names.length)] },
    { name: names[Math.floor(Math.random() * names.length)] },
  ];
  return (
    <div>
      <div className="min-w-screen min-h-screen wave-bg flex flex-col items-center justify-center px-5 py-5 ">
        <div className="flex -mx-3 mt-8">
          <div className="w-full px-3 mb-2 ">
            <Link
              to="/"
              className="flex w-full items-center justify-center  max-w-xs mx-auto bg-white   text-indigo-700 rounded-lg px-3 py-3 font-semibold"
            >
              Go Back
            </Link>
          </div>
        </div>
        <div className="w-full h-full ">
          {results.map((e, index) => (
            <TinderCard
              key={e.name}
              onSwipe={(dir) => swiped(dir, e.name)}
              onCardLeftScreen={() => outOfFrame(e.name)}
            >
              <div className="bg-gray-100 text-gray-500 pt-10 pb-6 px-5 md:px-10 rounded-3xl shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   overflow-hidden ">
                <div className="absolute  top-3 right-5 ">
                  <div className="flex flex-col items-center justify-center">
                    <FaHeart className="text-red-500 text-3xl"></FaHeart>
                    <div className="text-sm font-extrabold ">
                      {
                        perLike[index][
                          Math.floor(Math.random() * perLike[index].length)
                        ]
                      }{" "}
                      %
                    </div>
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
                  <div className="font-semibold text-xl  pt-4 text-gray-900">
                    <div>
                      Body Type :{" "}
                      {body_type[Math.floor(Math.random() * body_type.length)]}
                    </div>
                    <div>
                      Diet : {diet[Math.floor(Math.random() * diet.length)]}
                    </div>
                    <div>
                      Drinks :{" "}
                      {drinks[Math.floor(Math.random() * drinks.length)]}
                    </div>
                    <div>
                      Drugs : {drugs[Math.floor(Math.random() * drugs.length)]}
                    </div>
                    <div>
                      Education :{" "}
                      {education[Math.floor(Math.random() * education.length)]}
                    </div>
                    <div>
                      Orientation :{" "}
                      {
                        orientation[
                          Math.floor(Math.random() * orientation.length)
                        ]
                      }
                    </div>
                    <div>
                      Pets : {pets[Math.floor(Math.random() * pets.length)]}
                    </div>
                    <div>
                      Religion :{" "}
                      {religion[Math.floor(Math.random() * religion.length)]}
                    </div>
                    <div>
                      Sign : {sign[Math.floor(Math.random() * sign.length)]}
                    </div>
                    <div>Age : {Math.floor(Math.random() * 40 + 25)}</div>
                  </div>
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
