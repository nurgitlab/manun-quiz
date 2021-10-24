import { useHistory } from "react-router";


export const ErrorPage = () => {
  const history = useHistory();
  const goBackToMain = () => {
    history.push("/");
  };

  return (
    <div
      className={"start-main-block"}
    >
      <div>
        <img
          width={"100%"}
          height={"auto"}
          src={"https://www.nicepng.com/png/full/225-2255762_error404-error-404-icono-png.png"}
        />
      </div>
      <div>
        <div
          className={"start-button "}
          onClick={() => goBackToMain()}
        >
          Вернуться на главную
        </div>
      </div>
    </div>
  );
};