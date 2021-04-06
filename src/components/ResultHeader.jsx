//NPM packages
import { useTranslation } from "react-i18next";


export default function ResultHeader() {

     //constants  
     const [t] = useTranslation('common');     
  
    return (

<ul>    
            <li>{t("main.number")}</li>
            <li>{t("main.status")}</li>
            <li>{t("main.eta")}</li>
            <li>{t("main.location")}</li>
          </ul>
     
    );
  }