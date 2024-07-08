import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Theme from "../../components/theme/Theme";
import Title from "../../components/title/Title";
import styled from "./themedehi.module.css";

function Themedehi() {
  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <Title />
      </div>
      <div className={styled.header}>
        <Header />
      </div>
      <div className={styled.main}>
        <Theme />
      </div>
      <div className={styled.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Themedehi;
