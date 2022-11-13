import React from 'react';
import NavLink from './navLink';
import paths from 'src/paths';
import styles from './styles.module.scss';

const NavMenu: React.FC = () => {

	return (
		<nav className={styles.nav}>
			<NavLink to={paths.index}>
				Начало
			</NavLink>
			<NavLink to={paths.intro}>
				Введение
			</NavLink>
		</nav>
	)
}

export default NavMenu;