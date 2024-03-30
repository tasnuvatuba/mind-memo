import React from 'react'
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


export const SearchComponent = ({filterBySearch}) => {
  return (
    <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        //setSearchQuery(e.target.value);
        console.log(e.target.value);
        filterBySearch(e.target.value);
      }}
      variant="outlined"
      placeholder="Search by Title, Description, Category or Mood...."
      style={{ width: "100%" }}
    />
  </form>
  )
}
