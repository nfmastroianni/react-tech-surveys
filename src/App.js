import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import "flag-icon-css/css/flag-icons.min.css";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [surveyLink, setSurveyLink] = useState(
    "https://forms.gle/fEZCW1XpYW6sbiqz7"
  );
  useEffect(() => {
    setLanguage(cookies.get("i18next"));
    if (cookies.get("i18next") === "en") {
      setSurveyLink("https://forms.gle/fEZCW1XpYW6sbiqz7");
    } else if (cookies.get("i18next") === "es") {
      setSurveyLink("https://forms.gle/Uc9DLBnZmcTLmjJU8");
    } else {
      setSurveyLink("https://forms.gle/YQuU2mewp1sYvtTD6");
    }
  }, [language]);
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e);
    if (e === "en") {
      setSurveyLink("https://forms.gle/fEZCW1XpYW6sbiqz7");
    } else if (e === "es") {
      setSurveyLink("https://forms.gle/Uc9DLBnZmcTLmjJU8");
    } else {
      setSurveyLink("https://forms.gle/YQuU2mewp1sYvtTD6");
    }
    setLanguage(e);
  };
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "US",
      flag_code: "us",
    },
    {
      code: "es",
      name: "Español",
      country_code: "ES",
      flag_code: "es",
    },
    {
      code: "pt",
      name: "Portuguese",
      country_code: "BR",
      flag_code: "br",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <div className="background--custom uk-flex uk-flex-center uk-flex-middle">
        <header>
          <div className="uk-inline" style={{ minWidth: "228px" }}>
            <button
              className="uk-button uk-button-default"
              type="button"
              style={{ minWidth: "228px", color: "white" }}
            >
              {language === "en" && (
                <span className="flag-icon flag-icon-us"></span>
              )}
              {language === "es" && (
                <span className="flag-icon flag-icon-es"></span>
              )}
              {language === "pt" && (
                <span className="flag-icon flag-icon-br"></span>
              )}
              {t("change_language")}
            </button>
            <div data-uk-dropdown="mode: hover" style={{ minWidth: "228px" }}>
              <ul style={{ margin: "0", padding: "0" }}>
                {languages.map((lang) => {
                  return (
                    <li
                      key={lang.name}
                      style={{ listStyle: "none" }}
                      className=""
                    >
                      <button
                        className="uk-button uk-button-text"
                        disabled={language === lang.code}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          columnGap: "1rem",
                        }}
                        onClick={() => {
                          handleClick(lang.code);
                        }}
                      >
                        <span
                          className={`flag-icon flag-icon-${lang.flag_code}`}
                        ></span>
                        <p style={{ margin: 0, padding: 0 }}>{lang.name}</p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </header>
        <div className="uk-container uk-container-medium uk-text-center">
          <p className="welcome" style={{ color: "#fff" }}>
            {t("welcome")} {t("organization")}
          </p>
          <div
            style={{
              borderBottom: "1px solid lightgray",
              marginBottom: "2rem",
            }}
          >
            <h1 className="uk-text-bold" style={{ color: "#fff" }}>
              {t("purpose")}
            </h1>
          </div>
          <a
            href={surveyLink}
            className="uk-button uk-button-default uk-button-large"
            style={{ color: "white" }}
          >
            {t("action")}
          </a>
        </div>
        <footer className="">
          <a href="https://www.longbranch.k12.nj.us">
            <img
              src="https://www.longbranch.k12.nj.us/cms/lib/NJ01001766/Centricity/Template/GlobalAssets/images///logos/LBPS%20Seal%20-%20Together%20We%20Can.png"
              alt=""
              style={{ width: "65px", height: "65px" }}
            />
          </a>{" "}
          <p style={{ marginLeft: "1rem", textAlign: "center" }}>
            {t("organization")}
            <br />"{t("slogan")}"
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
