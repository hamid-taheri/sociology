import Emtiaz from "../../components/emtiaz/Emtiaz";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import styled from "./emtiazdehi.module.css";

function Emtiazdehi(){
    return(
        <div className={styled.container}>
            <div className={styled.title}>
                <Title/>
            </div>
            <div className={styled.header}>
                <Header/>
            </div>
            <div className={styled.main}>
                <Emtiaz/>
            </div> 
            <div className={styled.footer}>
                <Footer/>
            </div>  
        </div>
    )
}

export default Emtiazdehi;