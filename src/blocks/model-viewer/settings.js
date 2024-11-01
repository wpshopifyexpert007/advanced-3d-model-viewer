import { __ } from "@wordpress/i18n";
const { TabPanel, PanelBody, PanelRow } = wp.components;
const { InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;

import { useEffect, useState } from "@wordpress/element";

import { General } from "./tabs/General";
import Style from "./tabs/Style";
import tabController from "../../utils/tabController";
import { ClipboardButton } from "@wordpress/components";

const Settings = ({ attributes, setAttributes, isSelected }) => {
  const { alignment } = attributes;

  const [hasCopied, setHasCopied] = useState(false);

  const postType = wp.data.select("core/editor")?.getCurrentPostType() || "product";
  const postId = wp.data.select("core/editor")?.getCurrentPostId();

  useEffect(() => {
    tabController();
  }, [isSelected]);

  return (
    <>
      <InspectorControls>
        {postType === "a3dmv-viewer" && (
          <PanelBody>
            <PanelRow>
              <ClipboardButton
                style={{ width: "100%", justifyContent: "center" }}
                variant="primary"
                text={`[a3dmv_model_viewer id=${postId}]`}
                onCopy={() => setHasCopied(true)}
                onFinishCopy={() => setHasCopied(false)}
              >
                {hasCopied ? "Copied!" : "Copy Shortcode"}
              </ClipboardButton>
            </PanelRow>
          </PanelBody>
        )}
        <TabPanel
          className="a3dmv-tab-panel"
          activeClass="active"
          onSelect={tabController}
          tabs={[
            {
              name: "general",
              title: __("General", "advanced-3d-model-viewer"),
              className: "general",
            },
            {
              name: "style",
              title: __("Style", "advanced-3d-model-viewer"),
              className: "style",
            },
          ]}
        >
          {(tab) => {
            return (
              <span>
                {tab.name === "general" && <General attributes={attributes} setAttributes={setAttributes} />}
                {tab.name === "style" && <Style attributes={attributes} setAttributes={setAttributes} />}
              </span>
            );
          }}
        </TabPanel>
      </InspectorControls>
      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Alert Alignment")}
          alignmentControls={[
            { title: __("Alert in left", "b-blocks"), align: "left", icon: "align-left" },
            { title: __("Alert in center", "b-blocks"), align: "center", icon: "align-center" },
            { title: __("Alert in right", "b-blocks"), align: "right", icon: "align-right" },
          ]}
        />
      </BlockControls>
    </>
  );
};

export default Settings;
