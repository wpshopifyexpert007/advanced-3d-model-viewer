import { createRoot } from "react-dom";
import { useState } from "react";
import Style from "./Style";
import ModelViewer from "../../components/ModelViewer/ModelViewer";

document.addEventListener("DOMContentLoaded", function () {
  const viewers = document.querySelectorAll(".wp-block-a3dmv");
  viewers.forEach((viewer) => {
    const attributes = JSON.parse(viewer.dataset.attributes);
    viewer.removeAttribute("data-attributes");

    const root = createRoot(viewer);
    root.render(<View attributes={attributes} />);
  });
});

export function View({ attributes }) {
  const [viewer, setViewer] = useState(null);
  return (
    <>
      <Style attributes={attributes} />
      <ModelViewer attributes={attributes} viewer={viewer} setViewer={setViewer} />
    </>
  );
}
