import {useTheme} from '../Context/ThemeContext'

function Header() {

    const { theme, setTheme } = useTheme();

    return (
        <div>
            Header // Active Theme - ({theme})
            <br /><br />
            <button onClick={()=> {setTheme(theme === "light" ? "dark" : "light")}}>Change Theme</button>
        </div>
    )
}

export default Header