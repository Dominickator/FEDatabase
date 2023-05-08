import React from 'react' ;
import styles from './search.module.css' ;
import Axios from 'axios';
import { useState } from 'react';
import Popup from 'reactjs-popup';

export const SearchPage = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [might, setMight] = useState(0);
    const [effect, setEffect] = useState('');
    const [crit, setCrit] = useState(0);
    const [weight, setWeight] = useState(0);
    const [durability, setDurability] = useState(0);
    const [search, setSearch] = useState([]);
    const [weaponNameToUpdate, setWeaponNameToUpdate] = useState('');
    const [searchName, setSearchName] = useState('');



    const searchWeapons = (Event) => {
        Event.preventDefault();
        Axios.post('http://localhost:5000/searchWeapons', {
            name: searchName,
            number: number,
        })
        .then((response) => {
          setSearch(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };


    const updateWeapon = (Event) => {
        Event.preventDefault();
        Axios.put(`http://localhost:5000/updateWeapon/${name}`, {
          might: might,
          effect: effect,
          crit: crit,
          weight: weight,
          name: name
        })
        .then((response) => {
            setSearch([...search, {
              name: name,
              might: might,
              effect: effect,
              crit: crit,
              weight: weight
            }]);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      
      
      
      

        return(
            <>
                <div className={styles.container}>
                    <h1>Search Weapons</h1>
                    <form className={styles.searchForm}>
                    <input type="text" onChange={(Event) => {setSearchName(Event.target.value)}} id="weapon-name" name="weapon-name" placeholder='Weapon Name'></input>
                        <input type="text" onChange={(Event) => {setNumber(Event.target.value)}} id="game-number" name="game-number" placeholder='Game Number'></input>
                        <button className={styles.button} onClick={searchWeapons}>Search</button>
                    </form>
                    {search.length > 0 && (
                        <div className={styles.searchResults}>
                            <h2>Search Results:</h2>
                            <ul>
                            {search.map((val, index) => {
                                return (
                                    <div key={index} className={styles.searchResults}>
                                            <li>
                                                <span>Name:</span> {val.name} <br></br>
                                                <span>Game:</span> {val.number} <br></br>
                                                <span>Might:</span> {val.might} <br></br>
                                                <span>Effect:</span> {val.effect} <br></br>
                                                <span>Crit Rate:</span> {val.crit} <br></br>
                                                <span>Weight:</span> {val.weight} <br></br>
                                                <span>Durability:</span> {val.durability}
                                            </li>
                                        <Popup trigger={<button className={styles.button}>Modify Weapon</button>}modal>
                                            <div className={styles.container}>
                                                <h1>Edit Weapon</h1>
                                                <form className={styles.searchForm}>
                                                    <input type="text" onChange={(Event) => {setName(Event.target.value)}} id="Name" name="Name" placeholder='Enter Weapon Name to Update' required></input>
                                                    <input type="text" onChange={(Event) => {setMight(Event.target.value)}} id="Might" name="Might" placeholder='Might' required></input>
                                                    <input type="text" onChange={(Event) => {setEffect(Event.target.value)}} id="Effect" name="Effect" placeholder='Effect' required></input>
                                                    <input type="text" onChange={(Event) => {setCrit(Event.target.value)}} id="Crit" name="Crit" placeholder='Critical Hit Rate' required></input>
                                                    <input type="text" onChange={(Event) => {setWeight(Event.target.value)}} id="Weight" name="Weight" placeholder='Weight' required></input>
                                                    <button className={styles.button} onClick={updateWeapon}>Save Changes</button>
                                                </form>
                                            </div>
                                        </Popup>
                                    </div>
                                );
                                })}

                            </ul>
                        </div>
                    )}
                </div>

            </>
        )
}