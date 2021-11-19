import React, { useState } from "react";
import { FaEye, FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";

// age body_type diet drinks drugs education ethinicity height income job offspring orientation pets religion sex sign smokes speaks status
const UserInfoCard = () => {
  const [jobKeyword, setJobKeyword] = useState([]);
  const [jobLocation, setJobLocation] = useState([]);
  const [jobAge, setJobAge] = useState("");
  const [jobsList, setJobsList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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
  const optionsJobAge = [
    { value: "1", lable: "Last 1 Day" },
    { value: "3", lable: "Last 3 Days" },
    { value: "7", lable: "Last 7 Days" },
    { value: "15", lable: "Last 15 Days" },
    { value: "30", lable: "Last 30 Days" },
  ];
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
                <div className="flex w-full pr-2 my-10">
                  <Select
                    className="w-2/5 mx-4"
                    options={optionsJobAge}
                    getOptionLabel={(optionsJobAge) => optionsJobAge["lable"]}
                    getOptionValue={(optionsJobAge) => optionsJobAge["value"]}
                    components={makeAnimated()}
                    theme={customTheme}
                    onChange={setJobAge}
                    placeholder="Freshness"
                    isSearchable
                  />
                </div>

                <div className="flex -mx-3 pt-2">
                  <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold  px-1 ">
                      Email
                    </label>
                    <div className="flex mt-1">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg">
                          <FaUserAlt></FaUserAlt>
                        </i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="elon.musk@codefurry.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value.toLowerCase());
                        }}
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-2">
                    <label for="" className="text-xs font-semibold  px-1 ">
                      Password
                    </label>
                    <div className="flex mt-1">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg">
                          <FaLock></FaLock>
                        </i>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      ></input>
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        pointer
                        className="block   text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        <i className="mdi mdi-account-outline text-gray-400 text-lg">
                          <FaEye></FaEye>
                        </i>
                      </button>
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
