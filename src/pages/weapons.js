import React from 'react';
import styles from './weapons.module.css';

export const WeaponsPage = () => {
    return (
        <>
            <head>
                <title>All Weapons</title>
            </head>
            <body>
                <div className={styles.container}>
                    <h1>All Weapons</h1>
                    <form className={styles.addWeaponForm}>
                        <input type="text" id="weapon-name" name="weapon-name" placeholder='Weapon Name' required></input>
                        <input type="text" id="weapon-type" name="weapon-type" placeholder='Game Name' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Game Number' required></input>
                        <input type="text" id="might" name="might" placeholder='Might' required></input>
                        <input type="text" id="effect" name="effect" placeholder='Effect' required></input>
                        <input type="text" id="critRate" name="critRate" placeholder='Critical Hit Rate' required></input>
                        <input type="text" id="weight" name="weight" placeholder='Weight' required></input>
                        <input type="text" id="durability" name="durability" placeholder='Durability' required></input>
                        <button className={styles.button} type="submit">Add Weapon</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Game Name</th>
                                <th>Game Number</th>
                                <th>Might</th>
                                <th>Effect</th>
                                <th>Crit Rate</th>
                                <th>Weight</th>
                                <th>Durability</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Example</td>
                                <td>FE 1</td>
                                <td>1</td>
                                <td>100</td>
                                <td>First Class</td>
                                <td>80%</td>
                                <td>10 lbs</td>
                                <td>100</td>
                                <td>
                                    <button className={styles.button}>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.button} id="remove-all-weapons">Remove All Weapons</button>
                </div>

            </body>
        </>

    )
}

export default WeaponsPage;