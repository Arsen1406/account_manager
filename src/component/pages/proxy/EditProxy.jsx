import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../stylePages/button.css"
import "../stylePages/detailData.css"
import "../stylePages/title.css"
import "../stylePages/loading.css"
import "../stylePages/forms.css"

export default function EditDetailProxy() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setData] = useState([]);
    const params = useParams()
    const proxyId = params.proxyId
  
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result.drinks[0]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      axios.put('http://example.com/api/endpoint', formData)
        .then((response) => {
          setData(response.data);
        });
    };
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="dataProxy"><div className='loadData'><span class="loader"></span></div></div>
    } else {
      return (
        <div className='dataProxy'>
            <div className='listDetailProxy'>
              <h1 className='titleName'>Редактировать прокси - {proxyId}</h1>
                <div className="mainForm">
                  <form onSubmit={handleSubmit}>
                    <div className='contentEdit'><label>Протокол:</label><input defaultValue={item.idDrink} type="text" placeholder="Протокол" name="protocol" /></div>
                    <div className='contentEdit'><label>Логин:</label><input defaultValue={item.strDrinkThumb} type="text" placeholder="Логин" name="login" /></div>
                    <div className='contentEdit'><label>Пароль:</label><input defaultValue={item.strDrink} type="text" placeholder="Пароль" name="password" /></div>
                    <div className='contentEdit'><label>Порт:</label><input defaultValue={item.strDrink} type="text" placeholder="Порт" name="port" /></div>
                    <div className='contentEdit'><label>Тип:</label><input defaultValue={item.strDrink} type="text" placeholder="Тип" name="mobile" /></div>
                    <div className='contentEdit'><label>Магазин:</label><input defaultValue={item.strDrink} type="text" placeholder="Магазин" name="market" /></div>
                    <div className='contentEdit'><label>Цена:</label><input defaultValue={item.strDrink} type="text" placeholder="Цена" name="price" /></div>
                    <button className='button' type="submit">Сохранить</button>
                  </form>
                </div>
            </div>
        </div>  
      );
    }
}