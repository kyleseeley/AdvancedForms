import React from "react";
import { useInventory } from "../../context/InventoryProvider";

const InventoryReport = () => {
  const { qValues } = useInventory();
  return (
    <div>
      <h2>Inventory Report</h2>
      <ul>
        {qValues.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryReport;
