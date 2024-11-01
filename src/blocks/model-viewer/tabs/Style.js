import { __ } from "@wordpress/i18n";
const { Panel, PanelBody, PanelRow } = wp.components;

import BUnitControl from "../../../components/BUnitControl/BUnitControl";
import BColor from "../../../components/BColor/BColor";

export default function Style({ attributes, setAttributes }) {
  const { style } = attributes;
  return (
    <>
      <Panel>
        <PanelBody title={__("Style", "advanced-3d-model-viewer")}>
          <PanelRow>
            <label>{__("Width", "advanced-3d-model-viewer")}</label>
            <BUnitControl
              value={style?.width}
              onChange={(width) => setAttributes({ style: { ...style, width } })}
              units={[
                { value: "px", label: "px", default: 500 },
                { value: "%", label: "%", default: 100 },
              ]}
            />
          </PanelRow>
          <PanelRow>
            <label>{__("Height", "advanced-3d-model-viewer")}</label>
            <BUnitControl
              value={style?.height}
              onChange={(height) => setAttributes({ style: { ...style, height } })}
              units={[
                { value: "px", label: "px", default: 500 },
                { value: "%", label: "%", default: 100 },
                { value: "vh", label: "vh", default: 100 },
              ]}
            />
          </PanelRow>
          <PanelRow>
            <label>{__("Background Color", "advanced-3d-model-viewer")}</label>
            <BColor value={style.bgColor} onChange={(bgColor) => setAttributes({ style: { ...style, bgColor } })} />
          </PanelRow>
        </PanelBody>
        {/* <PanelBody title={__("Additional", "advanced-3d-model-viewer")}>
          <PanelRow>
            <label>{__("ID", "advanced-3d-model-viewer")}</label>
            <TextControl value={additional.ID} onChange={(ID) => setAttributes({ additional: { ...additional, ID } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Class", "advanced-3d-model-viewer")}</label>
            <TextControl value={additional.Class} onChange={(Class) => setAttributes({ additional: { ...additional, Class } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("CSS", "advanced-3d-model-viewer")}</label>
          </PanelRow>
          <TextareaControl value={additional.CSS} onChange={(CSS) => setAttributes({ additional: { ...additional, CSS } })} />
        </PanelBody> */}
      </Panel>
    </>
  );
}
