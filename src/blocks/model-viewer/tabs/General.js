import { __ } from "@wordpress/i18n";
const { Panel, PanelBody, PanelRow, FormToggle } = wp.components;
import { produce } from "immer";

import BMediaUpload from "../../../components/BMediaUpload/BMediaUpload";
import { SelectControl, TextControl, ToggleControl } from "@wordpress/components";
// import BMediaUpload from "../../components/BMediaUpload/BMediaUpload";
// import Scenes from "./Scenes";

export function General({ attributes, setAttributes }) {
  const { options, model, attrs } = attributes;

  const updateModel = (key, value) => {
    const newModel = produce(model, (draft) => {
      draft[key] = value;
    });

    setAttributes({ model: newModel });
  };

  const updateAttribute = (key, value) => {
    const newAttrs = produce(attrs, (draft) => {
      draft[key] = value;
    });

    setAttributes({ attrs: newAttrs });
  };

  return (
    <>
      <Panel>
        <PanelBody title="Model" initialOpen={true}>
          <BMediaUpload
            value={model.model_url}
            placeholder={__("Model URL", "advanced-3d-model-viewer")}
            onSelect={(model_url) => updateModel("model_url", model_url)}
            type={["model/gltf+binary", "model/gltf+json"]}
            label={__("Model URL", "advanced-3d-model-viewer")}
          />
          <BMediaUpload
            value={model.poster_url}
            placeholder={__("Poster URL", "advanced-3d-model-viewer")}
            onSelect={(poster_url) => updateModel("poster_url", poster_url)}
            type={["image"]}
            label={__("Poster URL", "advanced-3d-model-viewer")}
          />
        </PanelBody>
        <PanelBody title={__("Options", "advanced-3d-model-viewer")} initialOpen={false}>
          {/* Attributes  */}
          <ToggleControl
            label={__("Enable Mouse Interaction", "advanced-3d-model-viewer")}
            checked={attrs?.["camera-controls"]}
            onChange={() => updateAttribute("camera-controls", !attrs?.["camera-controls"])}
          />
          <ToggleControl label={__("Enable Auto Rotate", "advanced-3d-model-viewer")} checked={attrs?.["auto-rotate"]} onChange={() => updateAttribute("auto-rotate", !attrs?.["auto-rotate"])} />
          <SelectControl
            label={__("Loading", "advanced-3d-model-viewer")}
            value={attrs.loading}
            options={[
              { label: "Auto", value: "auto" },
              { label: "Immediately", value: "eager" },
              { label: "Lazy Load", value: "lazy" },
            ]}
            onChange={(value) => updateAttribute("loading", value)}
          />
          {attrs["loading"] === "auto" && (
            <>
              <SelectControl
                label={__("Reveal", "advanced-3d-model-viewer")}
                value={attrs.reveal}
                options={[
                  { label: "Auto", value: "auto" },
                  { label: "Interaction", value: "interaction" },
                ]}
                onChange={(value) => updateAttribute("reveal", value)}
              />
            </>
          )}

          {/* custom options  */}
        </PanelBody>
      </Panel>
    </>
  );
}
