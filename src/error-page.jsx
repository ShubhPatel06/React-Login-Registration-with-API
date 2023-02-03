import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex items-center justify-center flex-col h-screen gap-10"
    >
      <h1 className=" text-red-500 text-7xl">Oops!</h1>
      <p className=" text-4xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-3xl">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
