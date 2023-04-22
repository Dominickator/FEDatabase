import React from 'react';
import styles from './modify.module.css'

export const ModifyPage = () => {
    return (
        <>
            <head>
                <title>Edit Weapon</title>
            </head>
            <body>
                <div className={styles.container}>
                    <h1>Edit Weapon</h1>
                    <form className={styles.editWeaponForm}>
                        <input type="text" id="weapon-name" name="weapon-name" placeholder='Weapon Name' required></input>
                        <input type="text" id="weapon-type" name="weapon-type" placeholder='Game Name' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Game Number' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Might' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Effect' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Critical Hit Rate' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Weight' required></input>
                        <input type="text" id="gameNumber" name="gameNumber" placeholder='Durability' required></input>
                        <button className={styles.button} type="submit">Save Changes</button>
                    </form>
                </div>
            </body>
        </>
    )
}

export default ModifyPage;