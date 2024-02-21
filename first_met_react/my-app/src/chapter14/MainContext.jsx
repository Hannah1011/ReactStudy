import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function MainContext(props){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white"
            }}>
                <p> 안녕하셔! 테마 변경하고 싶으면 밑에 토글 눌러봐~</p>
                <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}