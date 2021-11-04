import React from "react";
import {useHistory} from "react-router";

import "./NavBar.css";


export const NavBar: React.FC = () => {
    const history = useHistory();

    const goToMain = () => {
        history.push("");
    };

    const goToAbout = () => {
        history.push("/about");
    };

    const goToContacts = () => {
        history.push("/contacts");
    };

    return (
        <div className={"main-div"}>
            <div
                className={"logo"}
                onClick={() => goToMain()}
            >
            </div>

            <div
                className={"nav-button"}
                onClick={() => goToMain()}
            >
                Главная страница
            </div>

            <div
                className={"nav-button"}
                onClick={() => goToAbout()}
            >
                О проекте
            </div>

            <div
                className={"nav-button"}
                onClick={() => goToContacts()}
            >
                Контакты
            </div>
        </div>
    );
};