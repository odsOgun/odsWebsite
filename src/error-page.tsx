import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
  // Add any other properties you expect the error might have
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError | null; // Cast to RouteError or null

  console.error(error);

  // Handle undefined or null error cases
  const errorMessage = error?.statusText || error?.message || 'An unexpected error occurred';

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
