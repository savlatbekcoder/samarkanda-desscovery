import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GTranslateWidget = () => {
  const location = useLocation();

  const disabledPages = ["/tours", "/tours/"];

  useEffect(() => {
    if (!disabledPages.includes(location.pathname)) {
      window.gtranslateSettings = {
        default_language: "en",
        native_language_names: true,
        detect_browser_language: true,
        languages: ["en", "fr", "it", "ru"],
        wrapper_selector: ".gtranslate_wrapper",
        switcher_horizontal_position: "right",
        switcher_vertical_position: "top",
        float_switcher_open_direction: "bottom",
        alt_flags: { en: "usa" },
      };

      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup: Remove the script if the component unmounts
        document.body.removeChild(script);
      };
    }
  }, [location.pathname, disabledPages]);

  // Render only if the current page is not in the disabled list
  return !disabledPages.includes(location.pathname) ? (
    <div className="gtranslate_wrapper"></div>
  ) : null;
};

export default GTranslateWidget;
