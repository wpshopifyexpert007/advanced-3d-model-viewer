const { __experimentalUnitControl: UnitControl } = wp.components;

import "./styles.scss";

const BUnitControl = (props) => {
  const {
    units = [
      { value: "px", label: "px", default: 16 },
      { value: "em", label: "em", default: 1 },
    ],
    value,
    onChange,
    isResetValueOnUnitChange = true,
    ...rest
  } = props;

  return (
    <div id="BUnitControl">
      <UnitControl
        onChange={onChange}
        isResetValueOnUnitChange={isResetValueOnUnitChange}
        value={value}
        units={units}
        // onUnitChange={() => console.log("unit changed")}
        {...rest}
      />
    </div>
  );
};

export default BUnitControl;
