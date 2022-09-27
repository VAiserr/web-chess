import React from "react";
import "./mainMenu.scss";
import LogoLt from "../../assets/Chess_klt45.svg";
import LogoDt from "../../assets/Chess_kdt45.svg";
import { Link } from "react-router-dom";
import UITemplate from "../../components/UITemplate/UITemplate";

export default function MainMenu() {
  return (
    <div className="main-menu outer">
      <UITemplate>
        <fieldset>
          {/**
           * #TODO
           * Сделать метод, который будет рандомно
           * выбирать одну белую и одну черную фигуру...
           */}
          <img src={LogoLt} alt="" width={64} />
          <img src={LogoDt} alt="" width={64} />
        </fieldset>
        <fieldset>
          <Link to={"/board"} className="">
            <button className="field-input btn">New game</button>
          </Link>
          <Link to={"/board"} className="">
            <button className="field-input btn">Continue</button>
          </Link>
        </fieldset>
      </UITemplate>
    </div>
  );
}
