import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./RootLayout.module.css";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Toaster />
      <nav className={` ${styles.nav}`}>
        <NavBar />
      </nav>
      <main>
        {navigation.state === "loading" ? (
          <>
            <Loading />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default RootLayout;
