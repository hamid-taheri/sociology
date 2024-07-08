import { useSelector } from "react-redux";
import styled from "./footer.module.css";

function Footer() {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className={styled.container}>
      <div className={styled.div1}>
        <div>آدرس: ایران، تهران، خیابان پیروزی، خیابان اول نیروهوایی</div>
        <div>تلفن: 02177889922</div>
        <div>موبایل: 0912556677</div>
        <div>ایمیل: sociology@gmail.com</div>
      </div>
      <div className={styled.div2}>
      <span>امتیاز شما به وب اپلیکیشن : {counter}</span>
      </div>
    </div>
  );
}

export default Footer;
