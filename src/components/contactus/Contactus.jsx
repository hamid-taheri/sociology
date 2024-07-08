import styled from "./contactus.module.css";
import { useSelector } from "react-redux";

function Contactus() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div
      style={{ backgroundColor: theme ? "yellow" : "black" }}
      className={styled.container}
    >
      <p>آدرس: ایران، تهران، خیابان پیروزی، خیابان اول نیروهوایی</p>
      <p>تلفن: 02177665544</p>
      <p>موبایل: 09123456789</p>
      <p>ایمیل: sociology@gmail.com</p>
    </div>
  );
}

export default Contactus;
