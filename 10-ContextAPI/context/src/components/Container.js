import Button from './Button'
import Header from './Header';
import { useTheme } from '../Context/ThemeContext';
import Profile from './Profile';

function Container() {
    const { theme } = useTheme(); // Kapsayıcı bir container oluşturarak temayı bunların içine aldık
    return (
        <div className={`${theme}`}>    {/* Tema rengini css'te buradaki isme göre ayarladık */}
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container