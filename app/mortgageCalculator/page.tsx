import React from "react";
import MortgageCalculatorComponent from "@/components/mortgage-calculator";

const MortgageCalculator = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <MortgageCalculatorComponent propertyPrice={300000} />
    </div>
  );
};

export default MortgageCalculator;
