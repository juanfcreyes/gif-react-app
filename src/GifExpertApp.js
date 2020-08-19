import React, { useState } from 'react';
import AddCategory  from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] =  useState(['One Punch', 'Samurai X', 'Dragon Ball']); 
    return (
        <>
          <h1>GifExpertApp</h1> 
          <AddCategory setCategories={setCategories}></AddCategory>
          <hr/>
          { 
            categories.map((category) => {
                return <GifGrid key={category} category={category}></GifGrid>
            })
          }
  
        </>
    );
}; 

export default GifExpertApp;