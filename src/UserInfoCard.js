import React, { useState } from "react";
import { FaEye, FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";

// age body_type diet drinks drugs education ethinicity height income job offspring orientation pets religion sex sign smokes speaks status
const UserInfoCard = () => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,

        primary: "#7C3AED",
        primary25: "#DDD6FE",
        primary50: "#EDE9FE",
        neutral10: "#DDD6FE",
        neutral20: "#C4B5FD",
        neutral30: "#C4B5FD",
        neutral60: "#4C1D95",
        neutral80: "#4C1D95",
      },
    };
  }
  const [errors, setErrors] = useState({});
  const [jobAge, setJobAge] = useState("");

  const [age, setage] = useState("");
  const [sex, setsex] = useState("");
  const [orientation, setorientation] = useState("");
  const [body_type, setbody_type] = useState("");
  const [diet, setdiet] = useState("");
  const [drinks, setdrinks] = useState("");
  const [drugs, setdrugs] = useState("");
  const [education, seteducation] = useState("");
  const [pets, setpets] = useState("");
  const [religion, setreligion] = useState("");
  const [sign, setsign] = useState("");
  const [smokes, setsmokes] = useState("");

  const optionsJobAge = [
    { value: "1", lable: "Last 1 Day" },
    { value: "3", lable: "Last 3 Days" },
    { value: "7", lable: "Last 7 Days" },
    { value: "15", lable: "Last 15 Days" },
    { value: "30", lable: "Last 30 Days" },
  ];
  const optionsage = [
    { value: "20-25", lable: "20-25" },
    { value: "25-30", lable: "25-30" },
    { value: "30-35", lable: "30-35" },
    { value: "35-40", lable: "35-40" },
    { value: "40-45", lable: "40-45" },
  ];
  const optionssex = [
    { value: "male", lable: "male" },
    { value: "female", lable: "female" },
  ];
  const optionsorientation = [
    { value: "straight", lable: "straight" },
    { value: " gay", lable: " gay" },
    { value: " bisexual", lable: " bisexual" },
  ];
  const optionsbody_type = [
    { value: "rather not say", lable: "rather not say" },
    { value: " thin", lable: " thin" },
    { value: " overweight", lable: " overweight" },
    { value: " skinny", lable: " skinny" },
    { value: " average", lable: " average" },
    { value: " fit", lable: " fit" },
    { value: " athletic", lable: " athletic" },
    { value: " jacked", lable: " jacked" },
    { value: " a little extra", lable: " a little extra" },
    { value: " curvy", lable: " curvy" },
    { value: " full figured", lable: " full figured" },
    { value: " used up", lable: " used up" },
  ];
  const optionsdiet = [
    { value: "anything", lable: "anything" },
    { value: " vegetarian", lable: " vegetarian" },
    { value: " vegan", lable: " vegan" },
    { value: " kosher", lable: " kosher" },
    { value: " halal", lable: " halal" },
    { value: " other", lable: " other" },
  ];
  const optionsdrinks = [
    { value: "very often", lable: "very often" },
    { value: " often", lable: " often" },
    { value: " socially", lable: " socially" },
    { value: " rarely", lable: " rarely" },
    { value: " desperately", lable: " desperately" },
    { value: " not at all", lable: " not at all" },
  ];
  const optionsdrugs = [
    { value: "never", lable: "never" },
    { value: " sometimes", lable: " sometimes" },
    { value: " often", lable: " often" },
  ];
  const optionseducation = [
    { value: "graduated from", lable: "graduated from" },
    { value: " working on", lable: " working on" },
    { value: " dropped out of", lable: " dropped out of" },
    { value: " high school", lable: " high school" },
    { value: " two-year college", lable: " two-year college" },
    { value: " university", lable: " university" },
    { value: " masters program", lable: " masters program" },
    { value: " law school", lable: " law school" },
    { value: " med school", lable: " med school" },
    { value: " Ph.D program", lable: " Ph.D program" },
    { value: " space camp", lable: " space camp" },
  ];
  const optionspets = [
    { value: "has dogs", lable: "has dogs" },
    { value: " likes dogs", lable: " likes dogs" },
    { value: " dislikes dogs", lable: " dislikes dogs" },
    { value: "has cats", lable: "has cats" },
    { value: " likes cats", lable: " likes cats" },
    { value: " dislikes cats", lable: " dislikes cats" },
  ];
  const optionsreligion = [
    { value: "agnosticism", lable: "agnosticism" },
    { value: " atheism", lable: " atheism" },
    { value: " Christianity", lable: " Christianity" },
    { value: " Judaism", lable: " Judaism" },
    { value: " Catholicism", lable: " Catholicism" },
    { value: " Islam", lable: " Islam" },
    { value: " Hinduism", lable: " Hinduism" },
    { value: " Buddhism", lable: " Buddhism" },
    { value: " Other", lable: " Other" },
  ];
  const optionssign = [
    { value: "aquarius", lable: "aquarius" },
    { value: "pices", lable: "pices" },
    { value: "aries", lable: "aries" },
    { value: "Taurus", lable: "Taurus" },
    { value: "Gemini", lable: "Gemini" },
    { value: "cancer", lable: "cancer" },
    { value: "leo", lable: "leo" },
    { value: "virgo", lable: "virgo" },
    { value: "libra", lable: "libra" },
    { value: "scorpio", lable: "scorpio" },
    { value: "saggitarius", lable: "saggitarius" },
    { value: "Capricorn", lable: "Capricorn" },
  ];
  const optionssmokes = [
    { value: "yes", lable: "yes" },
    { value: "sometimes", lable: "sometimes" },
    { value: "when drinking", lable: "when drinking" },
    { value: "trying to quit", lable: "trying to quit" },
    { value: "no", lable: "no" },
  ];

  async function handleSubmit() {
    // if (jobKeyword.length === 0 || jobLocation.length === 0 || !jobAge) {
    //   toast.error("Enter All Fields");
    //   return;
    // }
    // try {
    //   const res = await axios.post(
    //     `${apiURL}/api/jobs`,
    //     {
    //       jobKeyword: keywords,
    //       jobLocation: locations,
    //       jobAge: age,
    //     },
    //     {
    //       headers: {
    //         "x-auth-token": token,
    //       },
    //     }
    //   );
    //   if (res.data.auth_error) {
    //     localStorage.removeItem("token");
    //     toast.info("Session Expired ...");
    //     window.location = "/";
    //   }
    //   if (res.data.error) {
    //     toast.error(res.data.error);
    //     return;
    //   }
    //   console.log(res.data);
    //   setJobsList(res.data["jobs"]);
    //   console.log(jobsList);
    // } catch (error) {
    //   toast.error("Something Went Wrong");
    // }

    const data = [{ name: "omkar" }, { name: "vishal" }];
  }
  return (
    <div>
      <div className="min-w-screen min-h-screen wave-bg flex items-center justify-center px-5 py-5 ">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full md:w-2/3 overflow-hidden z-20">
          <div className="md:flex w-full">
            <div className="w-full md:w-full pt-10 pb-6 px-5 md:px-10">
              <div className="text-center mb-8">
                <h1 className="font-bold text-3xl pb-4 text-gray-900">
                  MyMatch
                </h1>
                <p>Enter your information to find your solemate</p>
              </div>
              <div>
                {errors.message ? (
                  <div className="alert flex flex-row items-center bg-red-200 p-2 rounded border-b-2 border-red-300">
                    <div className="alert-content mx-2">
                      <div className="alert-description text-sm text-red-600">
                        {errors.message}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="flex">
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsage}
                      getOptionLabel={(optionsage) => optionsage["lable"]}
                      getOptionValue={(optionsage) => optionsage["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setage}
                      placeholder="age"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionssex}
                      getOptionLabel={(optionssex) => optionssex["lable"]}
                      getOptionValue={(optionssex) => optionssex["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setsex}
                      placeholder="sex"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsorientation}
                      getOptionLabel={(optionsorientation) =>
                        optionsorientation["lable"]
                      }
                      getOptionValue={(optionsorientation) =>
                        optionsorientation["value"]
                      }
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setorientation}
                      placeholder="orientation"
                      isSearchable
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsbody_type}
                      getOptionLabel={(optionsbody_type) =>
                        optionsbody_type["lable"]
                      }
                      getOptionValue={(optionsbody_type) =>
                        optionsbody_type["value"]
                      }
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setbody_type}
                      placeholder="body type"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsdiet}
                      getOptionLabel={(optionsdiet) => optionsdiet["lable"]}
                      getOptionValue={(optionsdiet) => optionsdiet["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setdiet}
                      placeholder="diet"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsdrinks}
                      getOptionLabel={(optionsdrinks) => optionsdrinks["lable"]}
                      getOptionValue={(optionsdrinks) => optionsdrinks["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setdrinks}
                      placeholder="drinks"
                      isSearchable
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsdrugs}
                      getOptionLabel={(optionsdrugs) => optionsdrugs["lable"]}
                      getOptionValue={(optionsdrugs) => optionsdrugs["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setdrugs}
                      placeholder="drugs"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionseducation}
                      getOptionLabel={(optionseducation) =>
                        optionseducation["lable"]
                      }
                      getOptionValue={(optionseducation) =>
                        optionseducation["value"]
                      }
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={seteducation}
                      placeholder="education"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionspets}
                      getOptionLabel={(optionspets) => optionspets["lable"]}
                      getOptionValue={(optionspets) => optionspets["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setpets}
                      placeholder="pets"
                      isSearchable
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionsreligion}
                      getOptionLabel={(optionsreligion) =>
                        optionsreligion["lable"]
                      }
                      getOptionValue={(optionsreligion) =>
                        optionsreligion["value"]
                      }
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setreligion}
                      placeholder="religion"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionssign}
                      getOptionLabel={(optionssign) => optionssign["lable"]}
                      getOptionValue={(optionssign) => optionssign["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setsign}
                      placeholder="sign"
                      isSearchable
                    />
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <Select
                      className="w-full mx-4"
                      options={optionssmokes}
                      getOptionLabel={(optionssmokes) => optionssmokes["lable"]}
                      getOptionValue={(optionssmokes) => optionssmokes["value"]}
                      components={makeAnimated()}
                      theme={customTheme}
                      onChange={setsmokes}
                      placeholder="smokes"
                      isSearchable
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full pr-2 my-4">
                    <div className="grid grid-cols-1 mx-4">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        essay 1
                      </label>
                      <textarea
                        rows="3"
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <div className="grid grid-cols-1 mx-4">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        essay 2
                      </label>
                      <textarea
                        rows="3"
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <div className="grid grid-cols-1 mx-4">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        essay 3
                      </label>
                      <textarea
                        rows="3"
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex w-full pr-2 my-4">
                    <div className="grid grid-cols-1 mx-4">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        essay 4
                      </label>
                      <textarea
                        rows="3"
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex -mx-3 mt-8">
                  <div className="w-full px-3 mb-2 ">
                    <Link
                      to="/results"
                      onClick={handleSubmit}
                      className="flex w-full items-center justify-center  max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      Find My Partner
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
