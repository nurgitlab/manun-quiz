import "./NavBar.css"
import { useHistory } from "react-router";


export const NavBar = () => {
  const history = useHistory()

  const goToMain = () => {
    history.push("")
  }
  return (
    <div className={"main-div"}>
      <div
        className={"logo"}
        onClick={()=>goToMain()}
      >
      </div>
      <div className={"nav-button"}>Главная страница</div>
      <div className={"nav-button"}>О проекте</div>
      <div className={"nav-button"}>Контакты</div>
    </div>
  )
}