import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './roompage.module.css';

const StudyRoom = () => {
  const { roomId } = useParams();
  return (
    <div>
      <h1>Welcome to study rooms</h1>
      <h3>Room Id: {roomId}</h3>

      <div className={styles.container}>
        <div className={styles.live}>
          <p>Live Video from intructor</p>
        </div>
        <div className={styles.container_student}>
          <div className={styles.webcam}>
            <p>Live webcam video of student</p>
          </div>
          <div className={styles.emotion}>
            <p>Live emotion state of the student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
