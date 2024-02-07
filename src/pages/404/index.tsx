import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="flex h-full flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24">
      <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-gray-900">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-900">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button
                onClick={clickHandler}
                className="md my-2 rounded border bg-slate-600 px-8 py-4 text-center text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50 sm:w-full lg:w-auto"
              >
                Take me there!
              </button>
            </div>
          </div>
          <div>
            <img src="/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="/Group.png" />
      </div>
    </div>
  );
};

export default NotFoundPage;
