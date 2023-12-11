import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent
        defaultValue={3000}
        min={1000}
        max={10000}
        label="Hello Label"
        amount={3500}
        unit={"$"}
        step={100}
        onChange={(e)=> console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
