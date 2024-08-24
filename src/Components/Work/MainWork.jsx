import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { CreateDay } from './CreateDay'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';

export const MainWork = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyB41NBrZ75HKzYKHX50in5BuSo1qSVilGY",
        authDomain: "prueba-5083b.firebaseapp.com",
        projectId: "prueba-5083b",
        storageBucket: "prueba-5083b.appspot.com",
        messagingSenderId: "845936905497",
        appId: "1:845936905497:web:827ba041260b4e16ac4988",
        measurementId: "G-VGH21NT2J9"
      };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
      async function UpDay(data,state) {
        // crear una coleccion
        /*
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }*/
        // crear documento dentro de la colección
        /*
          try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Alan",
              middle: "Mathison",
              last: "Turing",
              born: 1912
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
            */
        // Crea un documento en la db si no existe uno con el mismo nombre
        // o lo modifica si esxite uno
        const x = new Date().toLocaleString('es-ES', { month: 'long' });
    
        await setDoc(doc(db, `${x}`, `${data.name}`), {
          name: data.name,
          start: data.start,
          end: data.end,
          date: data.date,
          extras: data.extras
        });
    
    
      }
    
    async function upMonth(data) {
      const mes = new Date().toLocaleString('es-ES',{month:'long'});
      console.log(mes);
      console.log(data)
      //await setDoc(doc(db, mes, data.name), data);
    }

    return (
        <section className='flex flex-col size-full'>
          <NavBar/>
          <CreateDay config={firebaseConfig} up={UpDay}/>
        </section>
      )
}
