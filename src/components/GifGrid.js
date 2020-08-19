import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

function GifGrid({category}) {
    const {loading, data:gifs} = useFetchGifs(category);
    return (
        <>
            <h2 key={category}> {category} </h2> 
            { loading && 'Cargando...' }
            <div className="animate__animated animate__fadeIn card-grid">
                { 
                    gifs.map((gif) =>  {
                        return (
                            <GifGridItem key={gif.id} 
                            {... gif}></GifGridItem>
                        );
                    })
                }
            </div>
        </>        
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid

