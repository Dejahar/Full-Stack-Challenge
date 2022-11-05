import React from "react";
import { getAllGenres } from "api/gifs";
import { useQuery } from "@tanstack/react-query";
import GifCard from "components/gifCard";

const GenreMenu = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(["genres"], getAllGenres);
  return (
    <>
      <Link
        to="#"
        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
      >
        Contact
      </Link>
      <div
        className={`${
          data.length > 0
            ? "flex flex-col md:grid md:grid-cols-5 gap-5  md:gap-6  md:overflow-x-auto "
            : "flex flex-col"
        }`}
      >
        {data.length > 0 ? (
          data.map((gif) => <GifCard gif={gif} key={gif._id} />)
        ) : (
          <h2 className="text-center md:text-2xl text-xl mb-8 text-white">
            There are no gifs here.
          </h2>
        )}
      </div>
    </>
  );
};
