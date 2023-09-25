import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();


  useEffect(() => {
    //making an api call also using debouncing with 200 ms
    // means if differnece between 2 keystrokes is <200 ms
    // then decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cachedResults({
      [searchQuery]: json[1],
    }))
  };


  const toggleMenuHandler = () => {
    // console.log("Clicked");
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white grid grid-flow-col p-4 shadow-lg gap-4 items-center">
      <div className="flex space-x-4 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer transform hover:scale-105 transition-transform duration-150"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-10 transform hover:scale-105 transition-transform duration-150"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_of_YouTube_%282005-2006%29.svg/1200px-Logo_of_YouTube_%282005-2006%29.svg.png"
          />
        </a>
      </div>
      <div className="relative flex-grow">
        <div className="flex border border-gray-300 rounded-full hover:shadow-inner">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-2 pl-4 outline-none rounded-l-full"
            type="text"
            placeholder="Search YouTube..."
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-200 px-5 py-2 rounded-r-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-150">
            🔍
          </button>
        </div>
        {searchQuery && showSuggestions && (
          <div className="absolute bg-white py-2 px-3 w-full max-w-lg shadow-lg rounded-lg border border-gray-100 mt-2 z-10">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 hover:bg-gray-100 hover:shadow-md cursor-pointer rounded transition-colors duration-150">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex space-x-4 items-center">
        <img
          className="h-10 rounded-full transform hover:scale-105 transition-transform duration-150"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Head;