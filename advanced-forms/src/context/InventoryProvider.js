import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

const InventoryProvider = ({ children }) => {
  const [qValues, setQValues] = useState([]);

  useEffect(() => {
    console.log("qValues: ", qValues);
  }, [qValues]);
  return (
    <InventoryContext.Provider
      value={{
        qValues: qValues,
        setQValues: setQValues,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
