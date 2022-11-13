import React from 'react';
import { NavLink as ReactNavLink, NavLinkProps } from 'react-router-dom';
import styles from './styles.module.scss';
import cx from 'classnames';


const NavLink: React.FC<NavLinkProps> = (props) => {

	return (
		<ReactNavLink className={({ isActive }) => cx(styles.link, { [styles.activeLink]: isActive })} {...props}/>
	)
}

export default NavLink;