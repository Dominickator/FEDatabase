import React from 'react' ;
import styles from './search.module.css' ;

export const SearchPage = () => {
    return(
        <>
            <head>
                <title>Search Weapons</title>
            </head>

            <body>
                <div className={styles.container}>
                    <h1>Search Weapons</h1>
                    <form className={styles.searchForm}>
                        <input type="text" id="weapon-name" name="weapon-name" placeholder='Weapon Name'></input>
                        <input type="text" id="game-name" name="game-name" placeholder='Game Name'></input>
                        <button className={styles.button} type="submit">Search</button>
                    </form>
                    <div className={styles.searchResults}>
                        <h2>Search Results:</h2>
                        <ul>
                            <li>
                                <span>Name:</span> Example Weapon <br></br>
                                <span>Game:</span> FE 1 <br></br>
                                <span>Might:</span> 100 <br></br>
                                <span>Effect:</span> First Class <br></br>
                                <span>Crit Rate:</span> 80% <br></br>
                                <span>Weight:</span> 10 lbs <br></br>
                                <span>Durability:</span> 100
                            </li>
                        </ul>
                    </div>
                </div>

            </body>
        </>
    )
}