import React, { FC } from 'react';
import botImgSrc from '../../assets/images/free-icon-bot-4712106.png'
import styles from './styles.module.scss';

const Greeting: FC = () => {

	return (
	    <div className={styles.greeting}>
			<div className={styles.botImg}>
				<img src={botImgSrc}/>
			</div>
			<div className={styles.about}>
		    	<p className={styles.greetingText}>Hi!</p>
				<p>Привет! Рад тебя тут видеть! Я крутой бот для знакомств, прошу любить и жаловать.</p>
			</div>
	    </div>
    );
};

export default Greeting;
