import {useTheme} from '../Context/ThemeContext'  // useTheme hook'umuzu buraya import ettik

function Button() {

    const {theme, setTheme }= useTheme();  // useTheme hook'u ile ThemeContext içindeki verileri buraya çektik
   

    return (
        <div>
            Button // Active Theme - ({theme})

            <br /><br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>ChangeTheme</button>     {/* Toggle işlemi yaptık */}
        </div>
    )
}

export default Button