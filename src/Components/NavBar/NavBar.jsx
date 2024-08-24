import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {


    const styles = {
        main: 'w-full h-16 flex justify-center',
        header: 'flex w-full h-full shadow',
        ul: 'flex w-full h-full justify-between',
        li: 'size-full flex justify-center items-center',
        link: 'size-full flex justify-center items-center text-white font-bold text-lg'
    }

  return (
    <section className={styles.main}>
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <NavLink to={'/home'} 
                    className={ ({isActive})=> isActive ? `${styles.link} bg-green-500` :`${styles.link} bg-gray-600`}
                    >
                    Trabajo
                    </NavLink>
                </li>

                <li className={styles.li}>
                    <NavLink
                        className={({isActive})=> isActive ? `${styles.link} bg-green-500` :`${styles.link} bg-gray-600`}
                        to={'/finances'}
                    >
                    Finanzas
                    </NavLink>
                    
                </li>

                <li className={styles.li}>
                    Administrar
                </li>
            </ul>
        </header>
    </section>
  )
}
