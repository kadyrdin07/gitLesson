import React from 'react'
import scss from './Result.module.scss'

const Result = ({menuList,setMenuList}) => {
  const handledelete = (id) => {
    const buttonDelete = menuList.filter((item) => item.id !== id)
    setMenuList(buttonDelete)
  }
  return (
    <div> {
      menuList.map(({name,count,price,id})=> {
        return(
          <div className={scss.div1}>
            <h1>{name}</h1>
            <p>price{price}</p>
            <p>count{count}</p>
            <button  onClick={() => handledelete(id)}>delete</button>
          </div>
        )
      })}</div>
  )
}

export default Result