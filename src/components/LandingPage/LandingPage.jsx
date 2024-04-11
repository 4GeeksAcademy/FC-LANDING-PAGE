import React from 'react';
import styles from './LandingPage.module.css'; // Import CSS module for styling

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Page</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card 1" />
          <h2>Data Codes through Eyeglasses
</h2>
          <p>"Coding like poetry should be short and concise" - Santosh Kalwar</p>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 2" />
          <h2>Two Women Looking at the Code at Laptop</h2>
          <p>"First, solve the problem. Then, write the code" - John Johnson</p>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 3" />
          <h2>Woman Programming on a Notebook
</h2>
          <p>"Code is like humor. When you have to explain it, it's bad" - Cory House</p>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 4" />
          <h2>Code Projected Over Woman
</h2>
          <p>"Coding is the language of the future, and every girl should learn it"</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
