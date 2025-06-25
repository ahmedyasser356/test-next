

"use client"

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  let {push}=useRouter()

  function goToLogin(){
push('/login')
  }
  let [ahmed , setahmed] = useState('welcome to the next app ')
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
    
           <h1 onClick={goToLogin}>Click Here</h1>
           <h1>{ahmed}</h1>
         
       <h1>Ahmed Yasser</h1>
       <Link href={'/login'}>LOGIN page</Link>
      </main>
    
    </div>
  );
}
