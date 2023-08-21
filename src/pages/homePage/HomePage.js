import React from "react";
import { Button } from "../common/Button";
import Image from "next/image";
import config from "../../config";

export const HomePage = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  const downloadCv = () => {
    // Perform the download logic here
    const link = document.createElement("a");

    link.href = "/ShardulParlikar.pdf";
    link.download = "Shardul Parlikar";
    link.click();
  };

  function myhref(web) {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.open(web);
    }
  }

  return (
    <>
      <div className="bg-light-blue w-full h-screen">
        <div>
          <Image
            src="/klipartz1.png"
            className="absolute -top-20 -left-20"
            width={400}
            height={500}
            alt="Picture of the author"
            objectFit="cover"
          ></Image>

          <Image
            src="/klipartz1.png"
            className="absolute -bottom-16 -right-1"
            width={400}
            height={500}
            alt="Picture of the author"
            objectFit="cover"
          ></Image>

          <div className="flex pt-8 pb-40 pl-80 pr-96 justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-dark shadow-md">
                <span className="text-white text-2xl font-bold italic">
                  S<span className="text-4xl">P</span>
                </span>
              </div>
              <div>
                <span className="font-bold italic ml-8 text-capital text-lg">
                  S
                </span>
                <span className="font-bold italic">hardul</span>
              </div>
            </div>

            <Button
              round
              buttonClass="fas fa-moon text-white"
              onClick={handleButtonClick}
              color="orange-dark"
              vSmall
            ></Button>
          </div>

          <div className="flex px-80">
            <div className="bg-white w-96 rounded-md">
              <div className="flex items-center justify-center text-center relative bottom-12">
                <Image
                  src="/myImage.jpg"
                  className="rounded-full object-cover"
                  width={150}
                  height={150}
                  alt="Picture of the author"
                  objectFit="cover"
                ></Image>
              </div>

              <div className="font-bold text-center text-black text-lg font-inter">
                {config.name}
              </div>

              <div className=" text-black text-center font-inter text-sm">
                {config.postion}
              </div>
              <div className="border-t border-gray mt-8"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-orange-dark flex justify-center items-center ">
                    <div
                      className="fa fa-phone"
                      style={{ color: "#EE5F38" }}
                    ></div>
                  </div>
                  <div className="text-black text-sm ml-4">
                    {config.phoneNo}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-orange-dark flex justify-center items-center ">
                    <div
                      className="fa fa-envelope"
                      style={{ color: "#EE5F38" }}
                    ></div>
                  </div>
                  <div className="text-black text-sm ml-4"> {config.email}</div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-orange-dark flex justify-center items-center ">
                    <div
                      className="fa fa-location-dot"
                      style={{ color: "#EE5F38" }}
                    ></div>
                  </div>
                  <div className="text-black text-sm ml-4">
                    {config.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-16 flex">
              <div>
                <div>
                  <div className=" font-bold text-orange-dark uppercase text-3xl italic">
                    Hello I am
                  </div>
                  <div className="font-bold text-4xl">{config.name}</div>
                  <div className="font-bold text-2xl mt-2">
                    {config.postion}
                  </div>

                  <div className="text-2xl font-medium  text-black mt-8 text-ellipsis overflow-hidden font-sans">
                    {config.aboutMe} 
                  </div>

                  <div className="text-xl font-normal pt-4  text-black text-ellipsis overflow-hidden font-sans">
                    {config.discription}
                  </div>

                  <div className="mt-12">
                    <Button
                      semiRounded
                      large
                      name="Download CV"
                      // buttonClass="fa-solid fa-download"
                      onClick={downloadCv}
                      color="orange-dark"
                      textColor="text-white"
                    />
                  </div>
                </div>

                <div className="flex mt-8 ">
                  <div className="text-bold text-lg">follow me : </div>

                  <div
                    className="flex items-center ml-4 cursor-pointer  relative group"
                    onClick={() => myhref(config.linkedLink)}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-orange-dark flex justify-center items-center ">
                      <div
                        className="fa-brands fa-linkedin-in"
                        style={{ color: "#EE5F38" }}
                      ></div>
                    </div>
                    <span className="group-hover:opacity-100 opacity-0 bg-black text-black text-lg py-4 px-4 absolute left-1/2 top-3 transform -translate-x-1/2 transition-opacity">
                      LinkedIn
                    </span>
                  </div>

                  <div
                    className="flex items-center ml-4 cursor-pointer relative group"
                    onClick={() => myhref(config.gitHubLink)}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-orange-dark flex justify-center items-center  ">
                      <div
                        className="fa-brands fa-github"
                        style={{ color: "#EE5F38" }}
                      ></div>
                    </div>
                    <span className="group-hover:opacity-100 opacity-0 bg-black text-black text-lg py-4 px-4 top-3 absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity">
                      GitHub
                    </span>
                  </div>

                </div>
              </div>
              <div className="ml-8 flex flex-col gap-8 items-center ">
                <Button
                  semiRounded
                  name="Home"
                  // buttonClass="!w-40 h-11 fa-solid fa-home relative group"
                  onClick={handleButtonClick}
                  color="orange-dark"
                  textColor="text-white"
                ></Button>

                <Button
                  round
                  buttonClass="fa-solid fa-user relative group"
                  iconStyle="#EE5F38"
                  onClick={handleButtonClick}
                  color="white"
                  vSmall
                ></Button>

                <Button
                  round
                  buttonClass="fa-solid fa-folder"
                  iconStyle="#EE5F38"
                  onClick={handleButtonClick}
                  color="white"
                  vSmall
                ></Button>

                <Button
                  round
                  buttonClass="fa-solid fa-address-book"
                  iconStyle="#EE5F38"
                  onClick={handleButtonClick}
                  color="white"
                  vSmall
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
