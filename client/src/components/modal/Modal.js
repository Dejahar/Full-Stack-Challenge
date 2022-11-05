import { useState, Children, cloneElement } from "react";
import Portal from "components/portal";

const Modal = ({ modalTitle, children, open, setOpen }) => {
  const [showModal, setShowModal] = useState(false);

  const handelCloseModal = () => {
    open && setOpen(!open);
    setShowModal(false);
  };

  return (
    <>
      <button
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
		font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
		focus:outline-none dark:focus:ring-primary-800 "
        onClick={() => setShowModal(true)}
      >
        {modalTitle}
      </button>
      {showModal ? (
        <Portal>
          {/* <!-- Main modal --> */}
          <div className="flex md:justify-center md:items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Close button --> */}
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={() => handelCloseModal()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>

                {/* <!-- Title --> */}
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="text-center mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  {modalTitle}
                  </h3>

                  {/* <!-- Form --> */}
                  {Children.map(children, (child) =>
                    cloneElement(child, { setShowModal, open, setOpen })
                  )}
                </div>
              </div>
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export default Modal;
