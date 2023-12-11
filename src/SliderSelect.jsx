import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponent
        defaultValue={3000}
        min={1000}
        max={10000}
        label="Home Value"
        amount={3500}
        unit="$"
        step={100}
        onChange={(e)=> console.log(e.target.value)}
      />

<SliderComponent
        defaultValue={600}
        min={0}
        max={3000}
        label="Down Payment"
        amount={6000}
        unit="$"
        step={100}
        onChange={(e)=> console.log(e.target.value)}
      />

<SliderComponent
        defaultValue={2400}
        min={0}
        max={3000}
        label="Loan Amount"
        amount={2400}
        unit="$"
        step={100}
        onChange={(e)=> console.log(e.target.value)}
      />

<SliderComponent
        defaultValue={5}
        min={2}
        max={18}
        label="Interest Rate"
        amount={5}
        unit="%"
        step={0.5}
        onChange={(e)=> console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
