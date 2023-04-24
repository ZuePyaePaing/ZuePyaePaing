
import { useDispatch, useSelector } from "react-redux";
import { increments } from "./feature/services/counterSlice";
const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <h1>{value}</h1>
      <button
        onClick={() => {
          dispatch(increments(15));
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
