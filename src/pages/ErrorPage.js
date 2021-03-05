import { useHistory } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <div className="ErrorPage">
      <h1>404</h1>
      <p>This page could not be found!</p>
      <p>
        Go back to&nbsp;
        <span
          className="home-redirect-button"
          onClick={() => history.push("/")}
        >
          home page
        </span>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
