import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../styles/Userpage.css';
import Cardsystem from './Cardsystem.js';
import Searchbar from './Searchbar.js';
import Title from './Title.js';

require('dotenv').config();
 
function Userpage() {
    const [data, setData]=useState([]);
    const [searchValue, setSearch]=useState("");
    const [loading, setLoading]= useState(true);
    const [firstboot, setBoot]= useState(true);
    const [page, setPage]=useState(1)
    const [pageNextState,setNextState]=useState('')
    const [pagePrevState,setPrevState]=useState('')
    let number= 200;

    
    // loadSearch function handles the requested game search
    const loadSearch = async () => {
        setLoading(true);
        const res = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_URL}&search=${searchValue}&page_size=${number}&page=${page}`
        );
        setData(res.data.results);
        setNextState(res.data.next)
        setPrevState(res.data.previous)
        setLoading(false);
    }

    const nextPage= ()=>{
            if(pageNextState===null){return}
            setPage(page + 1)}

    const prevPage= ()=>{
            if(pagePrevState===null){return}
            setPage(page - 1)}

    useEffect(()=>{ 
        
        {
            loadSearch();
            
        }
       },[searchValue, page] );
       
    return(
        <div id="mainUI">
            <div className="logo"></div>
            <div id="userPanel"> </div>
            <div id="userDisplay">
                <div id="mainDisplay">
                <Title/>
                <Searchbar stateFunc={setSearch} firstboot={setBoot} />
                <Cardsystem pass={data} loading={loading} page={page} />
                <div id='buttonBox'>
                    <Button id='prevPage' onClick={prevPage}>Prev page</Button>
                    {page}
                    <Button id='nextPage' onClick={nextPage}>Next page</Button>
                </div> 
                </div>
                <div id="textDisplay">
                    <h1>Hello my pretty games</h1>
                </div>
            </div>
        </div>
    );
}

export default Userpage;
