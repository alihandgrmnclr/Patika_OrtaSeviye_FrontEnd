import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div>
      <ThemeProvider>    {/* Provider kullanarak eklemeleri yapabiliriz. parametrelerimize her yerden ulaşabilmek için buraya ekledik. ThemeContext içinde düzenledik*/}
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
