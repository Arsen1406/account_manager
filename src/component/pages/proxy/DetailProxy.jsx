import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../stylePages/button.css"
import "../stylePages/detailData.css"
import "../stylePages/title.css"
import "../stylePages/loading.css"
import CheckAuth from '../../utils';


export default function DetailProxy() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const params = useParams()
    const proxyId = params.proxyId
  
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.drinks[0]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    let cook = CheckAuth()
    let button
    if (cook === false){
      button = '';
    } else {
        button = <a className='button' href={proxyId + '/edit/'}>Редактировать прокси</a>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="dataProxy"><div className='loadData'><span class="loader"></span></div></div>
    } else {
      return (
        <div className='dataProxy'>
            <div className='listDetailProxy'>
                <span className='dataDetail'>
                <h1 className='titleName'>Детальная информация прокси - {proxyId}</h1>
                    <div className='content'><div className='left'>ID:</div><div className='right'>{items.idDrink}</div></div>
                    <div className='content'><div className='left'>ПРОТОКОЛ:</div><div className='right'>https</div></div>
                    <div className='content'><div className='left'>ЛОГИН:</div><div className='right'>D0lphi406</div></div>
                    <div className='content'><div className='left'>ПАРОЛЬ:</div><div className='right'>123456789</div></div>
                    <div className='content'><div className='left'>ПОРТ:</div><div className='right'>8000</div></div>
                    <div className='content'><div className='left'>ТИП:</div><div className='right'>True</div></div>
                    <div className='content'><div className='left'>МАГАЗИН:</div><div className='right'>Маркет</div></div>
                    <div className='content'><div className='left'>ЦЕНА:</div><div className='right'>1500 руб.</div></div>
                    <div className='content'><div className='left'>ДОБАВЛЕН:</div><div className='right'>22.03.2023, 13:15:49</div></div>
                </span>
                <div className='buttonDiv'>{button}</div>
            </div>
        </div>  
      );
    }
}