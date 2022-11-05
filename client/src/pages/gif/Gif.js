import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import DashboardSection from "components/dashboardSection";
import Loader from "components/loader/Loader";
import { getGifByID } from "api/gifs";
// import { useState } from "react";
// import Error from "components/error";

const Gif = () => {
  const { gifID } = useParams();
	console.log(gifID);

  // const [gifData, setgifData] = useState();

  const { isLoading, isError, data } = useQuery([`gifs-${gifID}`], () =>
    getGifByID(gifID)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    // <DashboardSection>
    //   {/* <Error /> */}
    // </DashboardSection>;
    return isError;
  }

  console.log(data);

  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={data.link}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{data.title}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{data.genre}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Gif;
