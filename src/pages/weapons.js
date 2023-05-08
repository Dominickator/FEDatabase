import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import styles from './weapons.module.css';

export const WeaponsPage = () => {
    const [name, setName] = useState('');
    const [crit, setCrit] = useState(0);
    const [number, setNumber] = useState(0);
    const [might, setMight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [tier, setTier] = useState(0);
    const [durability, setDurability] = useState('');
    const [effect, setEffect] = useState('');

    const [weapons, setWeapons] = useState([]);

    const AddWeapon = () => {
        Axios.post('http://localhost:5000/addWeapons', {
          name: name,
          durability: durability,
          number: number,
          might: might,
          effect: effect,
          crit: crit,
          weight: weight,
          tier: tier
        })
        .then((response) => {
          setWeapons([...weapons, {
            name: name,
            durability: durability,
            number: number,
            might: might,
            effect: effect,
            crit: crit,
            weight: weight,
            tier: tier
          }]);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      };
      
    

    const getWeapons = () => {
        Axios.get('http://localhost:5000/getWeapons')
          .then((response) => {
            setWeapons(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    };     
    
    const getByMostMight = () => {
        Axios.get('http://localhost:5000/getByMostMight')
          .then((response) => {
            setWeapons(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    };

    const getByLeastMight = () => {
        Axios.get('http://localhost:5000/getByLeastMight')
          .then((response) => {
            setWeapons(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    }; 

    const deleteWeapon = (name) => {
        Axios.delete(`http://localhost:5000/deleteWeapon/${name}`)
          .then((response) => {
            setWeapons(
              weapons.filter((val) => {
                return val.name !== name;
              })
            );
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
    const removeAllWeapons = () => {
        Axios.delete('http://localhost:5000/deleteAllWeapons')
          .then((response) => {
            setWeapons([]);
          })
          .catch((error) => {
            console.error(error);
          });
    };
      


    return (
        <>
            <div className={styles.container}>
                <h1>All Weapons</h1>
                <form className={styles.addWeaponForm}>
                    <input type="text" onChange={(Event) => {setName(Event.target.value)}} id="weapon-name" name="weapon-name" placeholder='Weapon Name' required></input>
                    <input type="text" onChange={(Event) => {setDurability(Event.target.value)}} id="weapon-durability" name="weapon-durability" placeholder='Weapon Durability' required></input>
                    <input type="text" onChange={(Event) => {setNumber(Event.target.value)}} id="gameNumber" name="gameNumber" placeholder='Game Number' required></input>
                    <input type="text" onChange={(Event) => {setMight(Event.target.value)}} id="might" name="might" placeholder='Might' required></input>
                    <input type="text" onChange={(Event) => {setEffect(Event.target.value)}} id="effect" name="effect" placeholder='Effect' required></input>
                    <input type="text" onChange={(Event) => {setCrit(Event.target.value)}} id="critRate" name="critRate" placeholder='Critical Hit Rate' required></input>
                    <input type="text" onChange={(Event) => {setWeight(Event.target.value)}} id="weight" name="weight" placeholder='Weight' required></input>
                    <button className={styles.button} type="submit" onClick={AddWeapon}>Add Weapon</button>
                </form>
                <button className={styles.button} onClick={getWeapons}>Show Weapons</button>
                <button className={styles.button} onClick={getByMostMight}>Sort by Most Might</button>
                <button className={styles.button} onClick={getByLeastMight}>Sort by Least Might</button>
                {weapons.length > 0 &&
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Weapon Durability</th>
                            <th>Game Number</th>
                            <th>Might</th>
                            <th>Effect</th>
                            <th>Crit Rate</th>
                            <th>Weight</th>
                            <th>Weapon Tier</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {weapons.map((val, key) => {
                            return(
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.durability}</td>
                                <td>{val.number}</td>
                                <td>{val.might}</td>
                                <td>{val.effect}</td>
                                <td>{val.crit}</td>
                                <td>{val.weight}</td>
                                <td>{val.tier}</td>
                                <td>
                                <button className={styles.button} onClick={() => deleteWeapon(val.name)}>Remove</button>
                                </td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    }

                <button className={styles.button} onClick={removeAllWeapons} id="remove-all-weapons">Remove All Weapons</button>
            </div>

        </>

    )
}

export default WeaponsPage;