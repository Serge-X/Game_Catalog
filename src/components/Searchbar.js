import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Userpage.css';

function Searchbar({stateFunc, firstboot}){
    const [text, setText]=useState("");
    
    const searchInput= (e) =>{
        setText(e.target.value);
    }
    
    const useSearchValue = (e) =>{
        e.preventDefault();
        firstboot(false);
        stateFunc(text);
        const data = [firstboot, stateFunc];
        return data.map(function(a){return a;});
    }

    return(
        <div>
        <form onSubmit={useSearchValue}>
        <input type= "search" id="searchBar" placeholder="enter game title" value={text} onChange={searchInput} />
        <Button id="searchButton" variant="outline-secondary" onClick={useSearchValue}> Search</Button>
        </form> 
        </div>
    )
}
 
export default Searchbar;