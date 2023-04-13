import "../stylePages/generalData.css"
import "../stylePages/loading.css"
import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CheckAuth from "../../utils";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200,
  renderCell: (params) => <a href={'/proxy/' + params.value}>{params.value}</a>, },
  { field: 'protocol', headerName: 'Protocol', width: 200 },
  { field: 'login', headerName: 'Login', width: 200 },
  { field: 'password', headerName: 'Password', width: 200 },
  { field: 'port', headerName: 'Port', width: 200 },
  { field: 'mobile', headerName: 'Mobile', width: 200 },
  { field: 'market', headerName: 'Market', width: 200 },
  { field: 'price', headerName: 'Price', type: "number"},
];

export default function DetailProxy() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.drinks);
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
        button = <a className='buttonMain' href="create/">Создать прокси</a>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="dataProxy"><div className='loadData'><span class="loader"></span></div></div>
    } else {
      const rows = items.map((proxy) => ({"id": proxy.idDrink, "protocol": proxy.strDrink, "login": proxy.strDrink, "password": proxy.strDrink, "port": proxy.strDrink, "mobile": proxy.strDrink, "market": proxy.strDrink, "price": proxy.strDrink}))
      return (
        <div className="dataProxy">
          <h1 className="titleName">Список всех прокси</h1>
          <div>{button}</div>
          <DataGrid className="proxyList"
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        /></div>
      );
    }
  }
