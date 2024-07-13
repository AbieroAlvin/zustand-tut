import { useCounterStore } from "@/store/counterStore";
import { Button } from "./ui/button";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <p>Count: {count}</p>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default Counter;
