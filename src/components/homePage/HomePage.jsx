import React, { useState } from 'react'
import scss from './homePage.module.scss'
import Menu from '../menu/Menu'
import hamburger from '../../img/hamburger.png'
import Cola from '../../img/cola.svg'
import Coffee from '../../img/coffee.png'
import Tea from '../../img/tea.svg'
import Cheeseburger from '../../img/cheeseburger.svg'
import Fries from '../../img/fries.svg'

const data =[
  {
    id:1,
    img: hamburger,
    name:"hamburger",
    price: 160,
  },
  {
    id:2,
    img: Coffee,
    name:"Coffee",
    price: 40,
  },
  {
    id:3,
    img: Cola,
    name:"Cola",
    price: 120,
  },
  {
    id:4,
    img: Cheeseburger,
    name:"Cheeseburger",
    price: 180,
  },
  {
    id:5,
    img: Fries,
    name:"Fries",
    price: 135,
  },
  {
    id:6,
    img: Tea,
    name:"Tea",
    price:20,
  }
  ]

const HomePage = () => {
  const [menu, setMenu] =useState(data)
  return (
    <div className={scss.homepage}>
      <Menu menu={menu} setMenu={setMenu}/>
    </div>
  )
}

export default HomePage