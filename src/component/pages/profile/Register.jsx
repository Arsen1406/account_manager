import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../stylePages/button.css"
import "../stylePages/detailData.css"
import "../stylePages/title.css"
import "../stylePages/loading.css"
import "../stylePages/forms.css"

export default function Register() {
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
      axios.post('http://example.com/api/endpoint', formData)
        .then((response) => {
          setData(response.data);
        });
    };
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='loadData'><span class="loader"></span></div>
    } else {
      return (
        <div className='dataProxy'>
            <div className='listDetailProxy'>
              <h1 className='titleName'>Регистрация</h1>
                <div className="mainForm">
                  <form onSubmit={handleSubmit}>
                    <div className='contentEdit'><label>Логин:</label><input type="text" placeholder="Логин" name="login" /></div>
                    <div className='contentEdit'><label>Имя:</label><input type="text" placeholder="Пароль" name="first name" /></div>
                    <div className='contentEdit'><label>Фамилия:</label><input type="text" placeholder="Пароль" name="last name" /></div>
                    <div className='contentEdit'><label>Почта:</label><input type="text" placeholder="Пароль" name="e-mail" /></div>
                    <div className='contentEdit'><label>Пароль:</label><input type="text" placeholder="Пароль" name="password" /></div>
                    <button className='button' type="submit">Регистрация</button>
                  </form>
                </div>
            </div>
        </div>  
      );
    }
}