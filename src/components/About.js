import User from "./User";
import UserClass from "./UserClass";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";
import { BsGithub, BsLinkedin } from "react-icons/bs";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parnet componentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1 className="p-4 text-center font-bold text-3xl">About</h1>
        <div className="pt-44 flex justify-between">
          <div>
            <h2 className="p-4 text-6xl text-gray-700 font-semibold">Nikhil</h2>
            <p className="p-4 text-gray-600">
              I'm a frontend developer who builds large scable appilations from
              scratch.
              <br /> This application is made by me from scratch using ReactJs.
            </p>
            <div className="flex p-4 ">
              <a
                href="https://www.linkedin.com/in/nikhilmuthyala7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="pr-2 text-5xl text-[#0A66C2] hover:cursor-pointer hover:scale-95 duration-200" />
              </a>
              <a
                href="https://github.com/ThePlator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="text-5xl hover:cursor-pointer hover:scale-95 duration-200" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/142066621?v=4"
              className="w-[300px] rounded-full border-dotted border-8 "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
