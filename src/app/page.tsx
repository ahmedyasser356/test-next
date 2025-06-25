

"use client"

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  let [ahmed , setahmed] = useState('welcome to the next app ')
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
    

           <h1>{ahmed}</h1>
         
       <h1>Ahmed Yasser</h1>
      </main>
    
    </div>
  );
}
