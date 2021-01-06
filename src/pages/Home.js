import React,{useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input,setInput]=useState('');

    const onInputChange=(ev)=>{
        //console.log(ev.target.value);
        setInput(ev.target.value);
    }

    const onDownPress=(ev)=>{
        if(ev.keyCode===13)
        {
            onSearch();
        }
    }
    
    const onSearch=()=>
    {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>console.log(result));
    }
    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onDownPress} value={input}/>
            <button type='button' onClick={onSearch}>Search</button>
        </MainPageLayout>
    )
}

export default Home
