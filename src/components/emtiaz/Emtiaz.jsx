import styled from "./emtiaz.module.css";
import { useSelector, useDispatch } from "react-redux";
import { conunterSlice } from "../../redux/counterSlice";

function Emtiaz() {
  const counter = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: theme ? "yellow" : "black" }}
      className={styled.container}
    >
      <p>با استفاده از دکمه های زیر به این وب اپلیکیشن امتیاز دهید :</p>
      <div className={styled.div1}>
        <button
          className={styled.button1}
          onClick={() => dispatch(conunterSlice.actions.incrementByAmount(1))}
        >
          یک امتیاز اضافه کن
        </button>
      </div>
      <div className={styled.div2}>
        <button
          className={styled.button2}
          onClick={() => dispatch(conunterSlice.actions.incrementByAmount(-1))}
        >
          یک امتیاز کم کن
        </button>
      </div>
      <div className={styled.div3}>
        <span>امتیاز شما به وب اپلیکیشن : {counter}</span>
      </div>
    </div>
  );
}

export default Emtiaz;
