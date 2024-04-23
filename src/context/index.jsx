import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalincome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currentFormData) {
    if (!currentFormData.description || !currentFormData.amount) return;
    setAllTransactions([...allTransactions], {
      ...currentFormData,
      id: Date.now(),
    });
  }

  console.log(allTransactions);
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalincome,
        setTotalIncome,
        value,
        setValue,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
