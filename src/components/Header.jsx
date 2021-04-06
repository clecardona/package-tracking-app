//NPM packages
import { useTranslation } from "react-i18next";

// Project files
import logo from "../assets/logo.png";

export default function Header() {
//constants  
  const [t, i18n] = useTranslation('common');

  return (
    <header>
      <img src={logo} alt="Logo" />
      <p><em>Yellow Corporation</em> <br/>{t("main.title")}</p>
      <div>
      <p id="button-label">{t("main.language")}</p>
        <div id="button-container">
        <button id= "button-uk" onClick={() => i18n.changeLanguage("en")}></button>
        <button id= "button-fr" onClick={() => i18n.changeLanguage("fr")}></button>
        <button id= "button-sv" onClick={() => i18n.changeLanguage("sv")}></button>
      </div>
      </div>
      
    </header>
  );
}
