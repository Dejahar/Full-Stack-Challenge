import React from "react";
import { Link } from "react-router-dom";

const GifCard = ({ gif }) => {
  return (
    <div className="relative text-white text-center flex md:flex-col bg-grey5  md:px-5 md:py-6 rounded-md">
      <Link to={`/gifs/${gif._id}`} key={gif._id}>
        <div className="gif--image md:mb-3  ">
          <img
            src={gif.link}
            alt=""
            className="rounded-md w-full"
          />
        </div>
        <div className="gif--content mt-2 md:text-left">
          <h2 className="md:text-xl md:mb-3 mb-2 ">{gif.title}</h2>
          <p className="text-grey overflow-y-auto md:flex hidden">
            {gif.genre}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GifCard;
