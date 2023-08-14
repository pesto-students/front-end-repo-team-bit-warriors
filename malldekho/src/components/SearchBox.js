import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import MallService from '../services/MallService';
import "../styles/reactAutoSuggest.css"
import { FaSearch } from "react-icons/fa";


const SearchBox = ({malls}) => {
    // const [malls, setMalls] = useState([]); // State to store the fetched malls
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     // Fetch the data once the component mounts
    //     async function fetchData() {
    //         try {
    //             const mallsData = await MallService.fetchAllMalls();
    //             setMalls(mallsData);
    //         } catch (error) {
    //             console.error("Error fetching malls:", error);
    //         }   
    //     }

    //     fetchData();
    // }, [malls]); // Empty dependency array ensures the effect runs only once

  const getSuggestions = (inputValue) => {
    console.log("Malls", malls)
    return malls.filter(
      (mall) => mall.name?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    ).slice(0, 3); // Show only 2-3 suggestions
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  // const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;
  const renderSuggestion = (suggestion) => {
    // Modify this function to customize the suggestion rendering
    return (
      <div className="react-autosuggest__suggestion">
      <img src={suggestion.image} alt={suggestion.name} className="suggestion-image" />
      <div className="suggestion-details">
        <span className="suggestion-name">{suggestion.name}</span>
        <span className="suggestion-info">{suggestion.info}</span>
      </div>
    </div>
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const onSuggestionSelected = (event, { suggestion }) => {
    // Redirect user to the mall's page with the mall's name in the URL
    console.log(`/mall/${encodeURIComponent(suggestion.name)}`)
    navigate(`/mall/${encodeURIComponent(suggestion._id)}`);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Search for a mall...',
    value,
    onChange,
  };

  return (
      <div className="searchboxContainer">
        <div className="search-box">
          <FaSearch/>
          <Autosuggest
            className="inputBox"
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={onSuggestionSelected} 
          />
      </div>
      </div>
  );
};

export default SearchBox;
