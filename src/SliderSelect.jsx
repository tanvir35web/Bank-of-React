import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {
  const bank_limit = 10000;
  
  return (
    <div>
      <SliderComponent
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        label="Home Value"
        amount={data.homeValue}
        value={data.homeValue}
        unit="$"
        step={100}
        onChange={(e, value) => setData({
          ...data,
          homeValue: value,
          downPayment: value * 0.2,
          loanAmount: value * 0.8
       }) }
      />

      <SliderComponent
        amount={data.downPayment}
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        label="Down Payment"
        value={data.downPayment}
        unit="$"
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: data.homeValue - value
        }) }
      />

      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        label="Loan Amount"
        amount={data.loanAmount}
        value={data.loanAmount}
        unit="$"
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: value,
          downPayment: data.homeValue - value
      }) }
      />

      <SliderComponent
        defaultValue={data.interestRate}
        min={2}
        max={18}
        label="Interest Rate"
        amount={data.interestRate}
        value={data.interestRate}
        unit="%"
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value}) }
        
      />
    </div>
  );
};

export default SliderSelect;
