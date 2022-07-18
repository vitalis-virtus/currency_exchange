import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="headers__wrapper">
    <h1 className='header__main'>Калькулятор обміну(конвертації валют)</h1>
    <p className='header__description'>
      Тут ви можете перегулянути актуальний курс для обміну однієї іноземної
      валюти на іншу
    </p>
  </header>  )
}
