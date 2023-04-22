import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

const LoginPage = () => {
    let navigate = useNavigate();
    return (
        <>
            <head>
                <title>Login Screen</title>
            </head>
            <body>
                <div className={styles.container}>
                    <h1 style={{ color: '#fff' }}>Login</h1>
                    <form action="#" method="post">
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Username" id="username" name="username" className={styles.inputField} required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="password" placeholder="Password" id="password" name="password" className={styles.inputField} required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <button className={styles.button} onClick={() => navigate('weapons')} type="submit">Login</button>
                        </div>
                        <div className={styles.errorMessage}>
                        </div>
                    </form>
                </div>
            </body>
        </>
    );
};

export default LoginPage;
