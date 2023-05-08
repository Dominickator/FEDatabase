import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import styles from './calc.module.css'

export const CalcPage = () => {

    const [weapons, setWeapons] = useState([]);
    const [name, setName] = useState('');
    const [defense, setDefense] = useState(0);
    const [might, setMight] = useState(0);
    const [strength, setStrength] = useState(0);

    const getWeaponByName = (Event) => {
        Event.preventDefault();
        Axios.get(`http://localhost:5000/getWeaponByName/${name}`, {
            name: name
        })
          .then((response) => {
            setWeapons(response.data);
            setMight(response.data[0].might);
          })
          .catch((error) => {
            console.error(error);
          });
    }

    const calculateDamage = (might, defense, strength) => {
        let damage = Number(strength) + Number(might) - Number(defense);
        return damage;
    }

    return (
        <>
            <head>
                <title>Edit Weapon</title>
            </head>
            <body>
                <div className={styles.container}>
                    <h1>Damage Calculator</h1>
                    <form className={styles.editWeaponForm}>
                        <input type="text" onChange={(Event) => {setName(Event.target.value)}} id="weapon-name" name="weapon-name" placeholder='Weapon Name' required></input>
                        <input type="number" onChange={(Event) => {setDefense(Event.target.value)}} id="defense" name="defense" placeholder='Defense' required></input>
                        <input type="number" onChange={(Event) => {setStrength(Event.target.value)}} id="strength" name="strength" placeholder='Strength' required></input>
                        <button className={styles.button} onClick={getWeaponByName}>Calculate Damage</button>
                    </form>
                    <h3>Damage: {calculateDamage(might, defense, strength)}</h3>
                </div>
            </body>
        </>
    )
}

export default CalcPage;