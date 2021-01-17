import React,{useState} from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import {get_api} from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {
    const [input,setInput]=useLastQuery();
    const [result,setResult]=useState(null);
    const [searchOption,setSearchOption]=useState('shows');
    const searchcheck = searchOption==='shows';

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
        get_api(`search/${searchOption}?q=${input}`).then(result=>{setResult(result);console.log(result)});
    }

    const radioButtonChange=(ev)=>
    {
        setSearchOption(ev.target.value);
        console.log(ev.target.value);
    }

    const renderResults=()=>
    {
        if(result && result.length===0)
        {
           return <div>No results</div>
        }
        if(result && result.length>0)
        {
           return result[0].show?<ShowGrid data={result}/>:<ActorGrid data={result} />
        }
        // if(result && result.length>0 && searchOption==='people')
        // {
        //   return <div>{result.map((item)=><div key={item.person.id}>{item.person.name}
        //   {/* <div style={{marginRight:10}}><img src={item.person.image.medium} alt='show poster'/></div> */}
        //   </div>)}</div>
        // }
        return null;
    }

    return (
        <MainPageLayout>
            <input type="text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onDownPress} value={input}/>
            <div>
                <label htmlFor="show-search">
                    shows
                    <input id="show-search" type="radio" value='shows' checked={searchcheck} onChange={radioButtonChange} />
                </label>
                <label htmlFor="actors-search">
                    actors
                    <input id="actors-search" type='radio' value='people' checked={!searchcheck} onChange={radioButtonChange} />
                </label>
            </div>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )
}

export default Home
