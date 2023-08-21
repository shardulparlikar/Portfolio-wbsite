import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faArrowRight,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export const ExpriancePage = () => {
  return (
    <div className="bg-white w-screen h-screen">
      <div className="flex">
        <div>
          <div
            className="pt-36"
            style={{ paddingLeft: "20rem", width: "81rem;" }}
          >
            <div className="text-2xl font-roundedMP text-orange-dark font-extrabold">
              Expericnce And Education
            </div>
            <div className="font-bold text-4xl mt-4">
              Resume of Experience and Education
            </div>
          </div>
          <div
            className="pt-24"
            style={{ paddingLeft: "20rem", width: "81rem;" }}
          >
            <div className="">
              <div className="">
                {config.resumeAndEducation.map((exp, index) => (
                  <>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap">
                        <span className="w-4 h-4 rounded-full border-2  border-orange-dark self-center"></span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-orange-dark self-center "
                        />
                        <div className="w-20 h-20 rounded-full border-2 ml-12  border-orange-dark bg-orange-dark flex justify-center items-center">
                          {exp.type === "job" && (
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="text-white fa-2x"
                            />
                          )}
                          {exp.type === "education" && (
                            <FontAwesomeIcon
                              icon={faUserGraduate}
                              className="text-white fa-2x"
                            />
                          )}
                        </div>
                        <div className="text-xl font-bold ml-4 mt-5">
                          {exp?.role || exp?.degree}
                        </div>
                        <div className="h-8 w-24 rounded-full bg-orange-dark flex justify-center items-center mt-5 ml-4">
                          <div className="text-white text-base">
                            {exp?.org || exp?.clg}
                          </div>
                        </div>
                        <div className="w-32 ml-4 mt-5 text-white h-8 rounded-full text-center   bg-orange-dark border-orange-dark border-2">
                          {exp.year}
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className="h-56 w-0.5 bg-orange-dark relative bottom-8  "
                          style={{ marginLeft: "0.34rem" }}
                        ></div>
                        <span className="text-base text-gray-300 ml-36">
                          {exp?.discription}
                        </span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-36" style={{ paddingLeft: "3rem", width: "" }}>
            <div className="text-2xl font-roundedMP text-orange-dark font-extrabold">
              Skills
            </div>

            <div className="pt-8">
              <div className="pt-4">

                {config.hardSkills.map((skill, index) => (
                  <div className="mt-8" key={index}>
                    <h2 className="font-bold text-xl">{skill.skillName}</h2>
                    <div className="mt-4 bg-gray-light rounded w-96 h-1.5 ">
                      <div
                        className={`bg-orange-dark h-1.5 rounded`}
                        style={{ width: `${+skill.rating * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-16">
                <div className="text-2xl font-roundedMP text-orange-dark font-extrabold">
                  Other Skills
                </div>

                <div className="flex flex-wrap gap-4">
                  {config.otherSkills.map((skill, index) => (
                     <div className="flex">
                        <div className="rounded-lg text-white bg-orange-dark h-6 w-auto justify-center items-center px-4" key={index} >
                          {skill}
                        </div>
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
