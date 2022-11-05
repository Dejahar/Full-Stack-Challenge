import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { uploadGif } from "api/gifs";

const Upload = ({ setShowModal }) => {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient();

  //POST createPlaylist
  const newGif = useMutation(uploadGif, {
    onSuccess: (resp) => {
      gifCreated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const gifCreated = (data) => {
    queryClient.invalidateQueries(["gifs"]);
    setShowModal(false);
    toast.success(data.message);
  };

  // const onSubmit = () => {
  //   const dataForm = new FormData(formRef.current);
  //   newGif.mutate(dataForm);
  // };

	const onSubmit = async (data) => {
    const { link, title, genre} = data;
    try {
      newGif.mutate({ link, title, genre });
    } catch (error) {
      toast.error("Gif could not be uploaded", {
        style: { maxWidth: "100%" },
      });
    }
  };

  return (
    <div>
      <form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your gif Link
          </label>
          <input
            name="link"
            id="link"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder=" Link"
            {...register("link", {
              required: { value: false, message: "Image is required." },
            })}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name your gif
          </label>
          <input
            name="title"
            id="title"
            placeholder="EL chiki chiki"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("title", {
              required: true,
              pattern: "{/[a-zA-Z]{1,}/}",
            })}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Genre
          </label>
          <input
            name="genre"
            id="genre"
            placeholder="funny"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("genre", {
              required: true,
              pattern: "{/[a-zA-Z]{1,}/}",
            })}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Upload your Gif
        </button>
      </form>
    </div>
  );
};

export default Upload;
