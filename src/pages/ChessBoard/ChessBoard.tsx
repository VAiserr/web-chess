import React from "react";
import { Link } from "react-router-dom";
import BackIC from "../../components/BackIC/BackIC";
import BoardComponent from "../../components/Board/BoardComponent";
import UITemplate from "../../components/UITemplate/UITemplate";
// import backIC from "../../assets/left-arrow-icon.svg";
import "./chessBoard.scss";

export default function ChessBoard() {
  return (
    <div className="chess-board outer">
      <UITemplate>
        <fieldset className="UI-header">
          <Link to={'..'}>
            <BackIC color="#fff" width={32} />
          </Link>
          <h3>Ход белых</h3>
          <div></div>
        </fieldset>
        <fieldset className="game-field">
          <BoardComponent />
        </fieldset>
      </UITemplate>
    </div>
  );
}
