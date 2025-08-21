'use client';
import React, { useState } from "react";
import Styles from "./page.module.css";
import { DSANavBar} from "@/presentation/components";
import Home from "./components/home";


const Page = () => {
  const [page, setPage] = useState(0);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <h2>About me</h2>;
      case 2:
        return <h2>Portfolio</h2>;
      case 3:
        return <h2>Contacto</h2>;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <DSANavBar setPage={setPage} />
      <main className={Styles.main}>
        {renderPage()}
      </main>
    </>
  );
};

export default Page;
