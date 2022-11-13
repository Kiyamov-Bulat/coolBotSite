import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../navMenu';
import styles from './styles.module.scss';

const DefaultLayout: FC = ({ children }) => {

    return (
        <div className={styles.container}>
            <NavMenu/>
            <Outlet/>
            {children}
        </div>
    );
};

export default DefaultLayout;
