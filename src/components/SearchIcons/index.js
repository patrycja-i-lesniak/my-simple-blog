import React from 'react';
import { BiSearch } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";


export default function SearchIcons({isVisible, toggleIsVisible}) {
  return (
   isVisible ? (
            <BiSearch className="search-icon" type="button" onClick={toggleIsVisible} />
          ) : (
            <RiCloseLine className="search-icon" onClick={toggleIsVisible} />
          )
  )
}
