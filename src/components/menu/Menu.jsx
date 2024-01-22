import React, { useState } from "react";
import scss from "./Menu.module.scss";
import Result from "../result/Result";

const Menu = ({ menu }) => {
	const [menuList, setMenuList] = useState([]);
	const [countUs, setCountUs] = useState([]);

	const handleAdd = (id) => {
		const getMenu = menuList.find((item) => item.id === id);
		if (getMenu) {
			const menuData = menu.find((item) => item.id === id);
			const menuDataObj = {
				id: getMenu.id,
				name: getMenu.name,
				price: (getMenu.price += menuData.price),
				count: (getMenu.count += 1),
				img: getMenu.img,
			};
			const menufilter = menuList.filter((item) => item.id !== id);
			setMenuList([...menufilter, menuDataObj]);
		} else {
			const menuData = menu.find((item) => item.id === id);
			const menuCount = { ...menuData, count: 1 };
			menuList.push(menuCount);
		}
		setCountUs([getMenu]);
	};
	return (
		<div>
			<h1 className={scss.h1}>MENU</h1>
			<div className={scss.menu}>
				{menu.map(({ id, name, price, img }) => {
					return (
						<div onClick={() => handleAdd(id)} className={scss.menubox}>
							<img src={img} alt={name} />
							<p>{name}</p>
							<h1>{price}</h1>
						</div>
					);
				})}
			</div>
			<Result menu={menu} menuList={menuList} setMenuList={setMenuList} />
		</div>
	);
};

export default Menu;
