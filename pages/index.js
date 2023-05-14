import Budget from "../components";
import BudgetProvider from "../widget/budgetContext";

const BudgetTracker = () => {
  return (
    <>
      <BudgetProvider>
        <Budget />
      </BudgetProvider>
    </>
  );
};

export default BudgetTracker;
