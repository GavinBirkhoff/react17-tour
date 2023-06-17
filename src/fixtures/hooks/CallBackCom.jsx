import { useCallback, useState } from "react";

const click = () => {};

const CallBackCom = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(click, [count]);
  console.log(handleClick === click);
  return (
    <div>
      CallBackCom{count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default CallBackCom