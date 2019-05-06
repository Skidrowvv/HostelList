import React from 'react';
import style from './MainSait.module.css';
import Search from '../Search/Search.js';
import Item from '../Item/Item.js';

const MainSait = () => {
	return(
	<div>
			<h1 className={style.look}>Hotel Look</h1>
			<Search />
		<div className={style.list}>
		<Item />
		</div>
	</div>
	)
}

export default MainSait;
