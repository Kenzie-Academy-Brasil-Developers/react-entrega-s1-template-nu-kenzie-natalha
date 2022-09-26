import { useState } from "react";

const TotalMoney = ({ listTransactions }) => {
  const TotalValue = listTransactions.reduce(
    (previousValue, currentValue) =>
      previousValue.type === "Entrada"
        ? previousValue + currentValue.value
        : previousValue - currentValue.value,
    0
  );
  return TotalValue;
};

export default TotalMoney;
