import React from "react";

const ThemeContext = React.createContext(); //컨텍스트의 초기값을 별도로 설정x
ThemeContext.displayName = "Themecontext";

export default ThemeContext;