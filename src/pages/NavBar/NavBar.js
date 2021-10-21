import "./NavBar.css"


export const NavBar = () => {
  return (
    <div className={"main-div"}>
      <div className={"logo"}></div>
      <div className={"nav-button"}>Главная страница</div>
      <div className={"nav-button"}>О проекте</div>
      <div className={"nav-button"}>Контакты</div>
    </div>
  )
}