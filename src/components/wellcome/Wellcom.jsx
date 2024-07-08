import styled from "./wellcome.module.css";
import { useSelector } from "react-redux";
import socio from "../../images/sociological.png"

function Wellcome() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div
      style={{ backgroundColor: theme ? "yellow" : "black" }}
      className={styled.container}
    >
      <img src={socio}/>
      <h3>به وب اپلیکیشن جامعه شناسی خوش آمدید.</h3>
    </div>
  );
}

export default Wellcome;
