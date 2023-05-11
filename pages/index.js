import Budget from "../components/budget";
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
