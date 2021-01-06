import React,{useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {get_api} from '../misc/config';

const Home = () => {
    const [input,setInput]=useState('');
    const [result,setResult]=useState(null);

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
        get_api(`search/shows?q=${input}`).then(result=>{setResult(result);console.log(result)});
    }

    const renderResults=()=>
    {
        if(result && result.length===0)
        {
           return <div>No results</div>
        }
        if(result && result.length>0)
        {
          return <div>{result.map((item)=><div key={item.show.id}>{item.show.name}
          {/* <div><img src={item.show.image.medium} alt="show poster"/></div> */}
          </div>)}</div>
        }
        return null;
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onDownPress} value={input}/>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )
}

export default Home
