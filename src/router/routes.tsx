import {  RouteObject } from "react-router-dom";
import App from "../App";
import ChessBoard from "../pages/ChessBoard/ChessBoard";
import MainMenu from "../pages/MainMenu/MainMenu";

const routes: RouteObject[] = [
    {
        /**
         * Общая разметка (Layout)
         */
        path: "/",
        element: <App/>,
        children: [
            // Главный путь
            {
                /**
                 * Страница главного меню (Main menu)
                 */
                path: '/',
                element: <MainMenu />
            },
            {
                /**
                 * Страница шахмат (Chessboard)
                 */
                path: '/board',
                element: <ChessBoard />
            }
        ]
    }
]

export default routes