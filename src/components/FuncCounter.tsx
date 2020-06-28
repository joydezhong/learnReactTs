import * as React from "react";

interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

const FuncCounter: React.FC<Props> = props => {
  const { label, count, onIncrement } = props

  return (
    <div>
      <span>{label}: {count}</span>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
};

export default FuncCounter