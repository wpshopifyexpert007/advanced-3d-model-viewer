const { useState, Fragment } = wp.element;
const { Dropdown, ColorPicker, Button } = wp.components;

import "./styles.scss";

/**
 *
 * @props
 * value: (String) --required
 * defaultColor: (String)
 * onChange: (Function) required
 * className: (String)
 * disableAlpha: (Boolean)
 * @boxPosition: 'top left' (String)
 *
 * return rgba color code
 */
const BColor = (props) => {
  const { value, title = "", toolbar = false, defaultColor, onChange, boxPosition = "top left", globalColors = [] } = props;
  const [state, setState] = useState(value);
  return (
    <div className="BColor">
      <Dropdown
        position={boxPosition}
        renderToggle={({ isOpen, onToggle }) => {
          return (
            <div style={{ display: "flex" }}>
              {defaultColor && defaultColor != state && (
                <Button
                  icon="image-rotate"
                  className={"bColorReset"}
                  onClick={() => {
                    onChange(defaultColor);
                    setState(defaultColor);
                  }}
                />
              )}
              {!toolbar && (
                <div className={"BColorButtonContainer"}>
                  <Button className={"BColorButton"} title={title} onClick={onToggle} aria-expanded={isOpen} style={value ? { backgroundColor: value } : { backgroundColor: "transparent" }} />
                </div>
              )}
              {toolbar && (
                <div className="BColorToolbar" onClick={onToggle}>
                  <p>A</p>
                  <p className="color" style={{ background: value }}></p>
                </div>
              )}
            </div>
          );
        }}
        renderContent={({ isOpen, onClose }) => (
          <Fragment>
            <ColorPicker
              color={value || ""}
              onChangeComplete={(c) => {
                // onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
                onChange(c.hex);
                setState(c.hex);
              }}
              // enableAlpha={false}
            />
            {globalColors.length > 0 && (
              <div style={{ display: "flex" }} className="globalColors">
                {globalColors.map((color) => {
                  return (
                    <div className={"BColorButtonContainer"} key={color}>
                      <button
                        className={"BColorButton"}
                        onClick={() => {
                          onChange(color.color);
                          setState(color);
                          onClose;
                        }}
                        aria-expanded={isOpen}
                        style={value ? { backgroundColor: color.color } : { backgroundColor: "transparent" }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </Fragment>
        )}
      />
    </div>
  );
};

export default BColor;
