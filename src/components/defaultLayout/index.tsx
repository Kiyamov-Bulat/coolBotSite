import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const DefaultLayout: FC = ({ children }) => {

    return (
        <div className={styles.container}>
            <Outlet/>
            {children}
        </div>
    );
};

export default DefaultLayout;
