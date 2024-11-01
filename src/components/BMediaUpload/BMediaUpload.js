const { Fragment } = wp.element;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Button, PanelRow, TextControl } = wp.components;

import "./style.css";

function BMediaUpload({ value, type = [], onSelect, placeholder, label }) {
  const handleUpload = () => {
    const frame = wp.media({
      // title: 'Select or Upload Media Of Your Chosen Persuasion',
      button: {
        text: "Select",
      },
      multiple: false, // Set to true to allow multiple files to be selected
    });
    frame.open();
    frame.on("select", () => {
      var attachment = frame.state().get("selection").first().toJSON();
      onSelect(attachment.url);
    });
  };
  return (
    <div className="bMediaUpload">
      <Fragment>
        {label && <label>{label}</label>}
        <PanelRow className="width-100">
          <MediaUploadCheck fallback={<Button icon="upload" className="button button-primary" onClick={handleUpload} />}>
            {<MediaUpload allowedTypes={type} onSelect={(file) => onSelect(file.url)} render={({ open }) => <Button className="button button-primary" onClick={open} icon={"upload"}></Button>} />}
          </MediaUploadCheck>
          <TextControl value={value} onChange={(fileUrl) => onSelect(fileUrl)} placeholder={placeholder} />
        </PanelRow>
      </Fragment>
    </div>
  );
}

export default BMediaUpload;
