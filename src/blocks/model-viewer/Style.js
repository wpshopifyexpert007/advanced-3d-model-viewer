import { useState, useEffect } from "react";

export default function Style({ attributes }) {
  const { clientId, style, additional, align } = attributes;
  const [css, setCSS] = useState();

  useEffect(() => {
    let css = `#${clientId} {width: ${style.width}; height: ${style.height}}}`;
    css += `#${clientId} {${align === "right" ? "margin-left:auto" : align === "center" ? "margin: auto" : ""}}`;
    css += `#${clientId} model-viewer{background-color: ${style.bgColor}}`;
    css += additional?.CSS;
    setCSS(css);
  }, [style, clientId, additional, align]);

  return <style>{css}</style>;
}
