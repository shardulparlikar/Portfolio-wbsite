import React from "react";
import Image from "next/image";
import config from "../config";

export const AboutMe = () => {
  return (
    <div className="bg-light-blue w-full h-screen">
      <div>
        <Image
          src="/klipartz3.png"
          className="absolute"
          width={600}
          height={700}
          alt="Picture of the author"
          objectFit="cover"
        ></Image>

        <div className="flex">
          <div>
            <div className="flex ">
              <div className="" style={{  }}>
                <div className="text-2xl font-bold text-orange-dark font-rubic">
                  About Me
                </div>
                <div className="text-3xl font-semibold  text-black mt-8 text-ellipsis overflow-hidden font-heebo">
                  {config.aboutMe}
                </div>
              </div>

              <div className="mt-16">
                <div className="font-rubic font-semibold  text-orange-dark text-2xl uppercase">
                  Personal Info:
                </div>
                <div className="flex gap-14">
                  <div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        First Name : {config.personalInfo.firstName}
                      </div>
                    </div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        nationality: {config.personalInfo.nationality}
                      </div>
                    </div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        Field of Work : {config.personalInfo.field}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        lastName : {config.personalInfo.lastName}
                      </div>
                    </div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        yearsOfExp : {config.personalInfo.yearsOfExp}
                      </div>
                    </div>
                    <div className="flex mt-8 items-center">
                      <div className="rounded-full border-2 border-orange-dark h-5 w-5 bg-white flex items-center justify-center">
                        <div className="bg-orange-dark h-2 w-2 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-base capitalize text-gray-400">
                        language : {config.personalInfo.language}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/shape11.png"
              className="relative left-80 top-24"
              width={50}
              height={50}
              alt="Picture of the author"
              objectFit="cover"
            ></Image>
            <Image
              src="/image.png"
              className="absolute pt-44"
              width={500}
              height={500}
              alt="Picture of the author"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
