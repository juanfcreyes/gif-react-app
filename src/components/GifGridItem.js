import React from 'react'

function GifGridItem({id, title, url}) {
    return (
        <div key={id} className="card animate__animated animate__backInDown">
            <img src={url} alt={title} width="100%"></img>
            <p className="caption">{title}</p>
        </div>
    );
}

export default GifGridItem

