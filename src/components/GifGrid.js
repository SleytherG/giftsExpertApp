import React, { useState, useEffect} from "react";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
// import {getGifs} from "../helpers/getGifs";

export const GifGrid = ( { category } ) => {

    // const [ images, setImages ] = useState([]);
    const { data: images, loading} = useFetchGifs( category );
    console.log( loading );
    console.log( images );
    //
    // useEffect( () => {
    //     getGifs( category )
    //         // .then( imgs => setImages( imgs ));
    //         .then( setImages );
    // }, [ category ])




    return (
        <React.Fragment>
            <h3 className={"animate__animated animate__fadeIn"} > { category } </h3>
            {/*{ loading ? <p>Loading</p> : null }*/}
            { loading && <p>Loading</p>  }
        <div className={"card-grid"}>
                {
                   images.map( ( img ) => (
                      <GifGridItem
                          key={ img.id }
                          {...img}
                      />
                   ))
                }
        </div>
        </React.Fragment>
    );
}
