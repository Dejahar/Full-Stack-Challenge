import { useNavigate } from "react-router-dom";
import { getGifs } from "api/gifs";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader";
import GifCard from "components/gifCard";

const CardsRow = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(["gifs"], getGifs);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate("/error");
  }

  return (
    <section className="md:my-10 my-5">
      <h2 className="text-center text-2xl m-2 text-white font-bold mb-5 mx-2">
        All Gif are yours
      </h2>

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
    </section>
  );
};

export default CardsRow;
