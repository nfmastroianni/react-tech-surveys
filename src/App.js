import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import ReactCountryFlag from "react-country-flag";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    setLanguage(cookies.get("i18next"));
    console.log(language);
  }, [language]);
  const { t } = useTranslation();
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "US",
    },
    {
      code: "es",
      name: "Español",
      country_code: "ES",
    },
    {
      code: "pt",
      name: "Portuguese",
      country_code: "BR",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <div className="background--custom uk-flex uk-flex-center uk-flex-middle">
        <header>
          <div className="uk-inline">
            <button className="uk-button " type="button">
              {language === "en" && <ReactCountryFlag countryCode="US" />}
              {language === "es" && <ReactCountryFlag countryCode="ES" />}
              {language === "pt" && <ReactCountryFlag countryCode="BR" />}
              {t("change_language")}
            </button>
            <div data-uk-dropdown="mode: click">
              <ul>
                {languages.map((lang) => {
                  return (
                    <li
                      key={lang.name}
                      style={{ listStyle: "none" }}
                      className=""
                    >
                      <ReactCountryFlag countryCode={lang.country_code} />
                      {lang.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </header>
        <div className="uk-container uk-container-medium uk-text-center">
          <h1 className="welcome uk-heading-medium" style={{ color: "#fff" }}>
            {t("welcome")}
            <br />
            {t("organization")}
            <br />
            {t("purpose")}
          </h1>
        </div>
        <footer className="">
          <img
            src="https://www.longbranch.k12.nj.us/cms/lib/NJ01001766/Centricity/Template/GlobalAssets/images///logos/LBPS%20Seal%20-%20Together%20We%20Can.png"
            alt=""
            style={{ width: "65px" }}
          />{" "}
          <p>
            {t("organization")}
            <br />"{t("slogan")}"
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
