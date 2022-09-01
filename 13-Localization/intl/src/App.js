import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const isLocale = localStorage.getItem("locale");  // localStorage'da kayıtlı dil var mı diye bunu belirttik
  const defaultLocale = isLocale ? isLocale : navigator.language; // tarayıcının varsayılan dilini belirledik. (isLocale varsa varsayılan bu olacak)

  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      description: "{count} yeni mesajınız var!"
    },
    "en-GB": {
      title: "Hello World",
      description: "You have {count} new messages!"
    },
  }

  const [locale, setLocale] = useState(defaultLocale);    // tarayıcının varsayılan dilini default olarak ayarladık

  useEffect(() => {
    localStorage.setItem("locale", locale)                // local storage varsayılan dili aldık
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />

        <br />

        <FormattedMessage id='description' values={{ count: 3 }} />

        <br /><br />

        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-GB")}>EN</button>

      </IntlProvider>

    </div>
  );
}

export default App;
