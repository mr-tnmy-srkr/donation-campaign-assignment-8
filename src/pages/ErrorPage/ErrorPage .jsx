import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
//   console.error(error);
const custom_class={
    backgroundImage:'linear-gradient(to top, #ee93ea, #c4a5ff, #8fb5ff, #53c2ff, #00cbff)'
}

  return (
    <div style={custom_class} id="error-page" className="h-[100vh] flex justify-center items-center text-center font-bold text-2xl custom_class">
     <div>
     <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      
      {error.status === 404 && (
        <div>
          <h3>404 page {error.statusText || error.message}</h3>
          <p className="mt-8"></p>
          <Link to="/">
            <button className="btn btn-primary text-white capitalize">
            Go Back to Home
            </button>
          </Link>
        </div>
      )}
        </div>
    </div>
  );
}
