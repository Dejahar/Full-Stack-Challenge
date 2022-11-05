import React from "react";
import { Link } from "react-router-dom";
import { getAllGenres } from "api/gifs";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader";

const GenreMenu = () => {
  // const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(["genres"], getAllGenres);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    // navigate("/error");
  }

  return (
    <>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {data.map((genre) => (
            <Link
              to={`/gifs/genre/${genre}`}
              className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              aria-current="page"
              key={genre}
            >
              {genre}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenreMenu;
