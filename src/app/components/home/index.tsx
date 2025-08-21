import React from "react";
import Image from "next/image";
import Styles from "./home.module.css";
import { DSAText, DSAButton, DSAIconSocial } from "@/presentation/components";


const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerText}>
        <div>
          <DSAText>Hello World, I&apos;m Kevin</DSAText>
          <DSAText fontSize="35px" fontWeight={700}>
            I&apos;m a Systems Engineering student and
          </DSAText>
          <DSAText color="rgb(205, 92, 92)" fontSize="40px" fontWeight={700}>
            Frontend Developer
          </DSAText>
        </div>
        <div className={Styles.containerIcon}>
          <DSAIconSocial icon="/svg/linkedin.svg" enlace="https://www.linkedin.com/in/kevinjesus-code/" />
          <DSAIconSocial icon="/svg/github.svg" enlace="https://github.com/Kevinjesus-code" />
          <DSAIconSocial icon="/svg/whatsapp.svg" enlace="https://api.whatsapp.com/send/?phone=51917397169&text=Hola+Kevin%2C+vi+tu+portafolio+y+me+interesa+contactarte+para+un+proyecto.&type=phone_number&app_absent=0" />
        </div>
        <div className={Styles.containerBtn}>
          <DSAButton variant="outline">Download CV</DSAButton>
          <DSAButton  variant="outline">Contact me</DSAButton>
        </div>
      </div>
      <div className={Styles.containerImg}>
        <Image
          src="/svg/foto.svg"
          alt="kevin"
          width={400}
          height={400}
          className={Styles.img}
        />  
      </div>
    </div>
  );
};

export default Home;
