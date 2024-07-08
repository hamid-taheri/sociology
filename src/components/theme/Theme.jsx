import { useDispatch, useSelector } from "react-redux";
import styled from "./theme.module.css";
import { themeSlice } from "../../redux/themeSlice";

function Theme() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch2 = useDispatch();
  return (
    <div
      style={{ backgroundColor: theme ? "yellow" : "black" }}
      className={styled.container}
    >
      <p>برای تغییر تم از روز به شب و یا بالعکس بر روی دکمه های زیر کلیک کنید :</p>
      <div className={styled.div1}>
        <button className={styled.button1}
          onClick={() => dispatch2(themeSlice.actions.rooz())}
        >
          روز
        </button>
      </div>
      <div className={styled.div2}>
        <button className={styled.button2}
          onClick={() => dispatch2(themeSlice.actions.shab())}
        >
          شب
        </button>
      </div>
    </div>
  );
}

export default Theme;
