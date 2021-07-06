import { RootState } from "../../appStore/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { MockBox, Button, ViewBox } from "./styled";

const MockComponents = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <MockBox>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <ViewBox>{count}</ViewBox>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </MockBox>
  );
};

export default MockComponents;
