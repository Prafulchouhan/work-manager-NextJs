import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600">
      <div className="flex p-5 justify-around">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl">Welcome to work manager</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt.
          </p>
        </div>
        <div className="text-center">
          <h1>Important links</h1>
          <ul className="flex flex-col ">
            <ui>
              <a href="">Linkedin</a>
            </ui>
            <ui>
              <a href="">Git</a>
            </ui>
            <ui>
              <a href="">Instagram</a>
            </ui>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
