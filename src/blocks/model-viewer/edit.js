import { useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect } from "react";
import Settings from "./settings";
import "./editor.scss";
import Style from "./Style";
import ModelViewer from "../../components/ModelViewer/ModelViewer";

export default function Edit(props) {
  const [viewer, setViewer] = useState(null);
  const { attributes, setAttributes } = props;

  //generate new unique ID
  useEffect(() => {
    setAttributes({ clientId: "a3dmv" + props.clientId.substr(0, 8) });
  }, [props.clientId]);

  return (
    <div {...useBlockProps()} style={{ textAlign: attributes.alignment }}>
      <Settings {...props} />
      <Style attributes={attributes} />
      <ModelViewer attributes={attributes} viewer={viewer} setViewer={setViewer} />
    </div>
  );
}
