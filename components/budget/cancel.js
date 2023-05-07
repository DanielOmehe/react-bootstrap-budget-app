import { useContext } from "react";
import Stack from "react-bootstrap/Stack";
import { BudgetContext } from "../../pages";

const Cancel =()=>{
  const { ACTIONS, dispatch } = useContext(BudgetContext)
  return (
    <>
      <Stack direction="horizontal" className="position-relative top-0" onClick={() => dispatch({ type: ACTIONS.CLOSE_FORM })}>
        <div className="cancel position-absolute">
          <div className="line bg-dark"></div>
          <div className="line bg-dark"></div>
        </div>
      </Stack>
      <style jsx>{`
        .cancel{
            left: 95%;
        }
        .line {
          width: 40px;
          height: 5px;
          margin-bottom: 10px;
          border-radius: 5px;
        }
        .line:nth-child(1) {
          transform: rotate(45deg);
        }
        .line:nth-child(2) {
          transform: translateY(-15px) rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default Cancel;
