import React,{useState,useCallback} from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/shows/ShowGrid';
import {get_api} from '../misc/config';
import { useLastQuery} from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const renderResults=(result)=>
    {
        if(result && result.length===0)
        {
           return <div>No results</div>
        }
        if(result && result.length>0)
        {
           return result[0].show?<ShowGrid data={result}/>:<ActorGrid data={result} />
        }
        return null;
    }

const Home = () => {
    const [input,setInput]=useLastQuery();
    const [result,setResult]=useState(null);
    const [searchOption,setSearchOption]=useState('shows');
    const searchcheck = searchOption==='shows';

    
    const onInputChange=useCallback((ev)=>{
        //console.log(ev.target.value);
        setInput(ev.target.value);
    },[setInput])

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

    const radioButtonChange=useCallback((ev)=>
    {
        setSearchOption(ev.target.value);
    },[]);


    return (
        <MainPageLayout>
            <SearchInput type="text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onDownPress} value={input}/>
            <RadioInputsWrapper>
                <div>
                    <CustomRadio 
                    label='shows'
                    id="show-search"
                    value='shows' 
                    checked={searchcheck} 
                    onChange={radioButtonChange}/>
                </div>
                <div>
                <CustomRadio 
                    label='actors'
                    id="actors-search"
                    value='people' 
                    checked={!searchcheck} 
                    onChange={radioButtonChange}/>
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
            <button type='button' onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            {renderResults(result)}
        </MainPageLayout>
    )
}

export default Home
