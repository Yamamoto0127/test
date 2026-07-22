import "./like-button.css"; 
import { useState } from "react"; 
export function LikeButton() {
  const [count, setCount] = useState(1); 
  const handleClick = () => {
    setCount(count + 1);
  };
  return(
    <button className="like" onClick={handleClick} type="button">
      {count}
    </button>
  );
}