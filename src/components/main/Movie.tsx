import React,{useState,useEffect} from 'react';
import "../css/index.css";
import axios from 'axios';
import Movie from '../Index_Interface';
import {useLocation}from 'react-router-dom';
const Movie = () => {
  const[fetchdata,setfetchdata]=useState<Movie[]>([]);
  const location=useLocation();
  console.log(location.state);
  const x =location.state;
  
  const baseURL=`https://yts.mx/api/v2/movie_details.json?movie_id=${x}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setfetchdata(response.data["data"]['movie']);
    })

  }, []);
  console.log("data is ");
  console.log(fetchdata);
  console.log("end");
  return (
    <div>
        
      
                    
                    <div className='container'>
                    <div className='navbar'>
            <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YIFY"/>
            {/* <span className='navbartext'>HD movies at the smallest file size.</span> */}
    
            <input type="text" className='text'/>
           
            
            <div className='navitems'>
            
            
            <ul>
                
                <li>Home</li>
                <li>4K</li>
                <li>Trending</li>
                <li>Browse Movies</li>
                <li>Login |Register</li>
            </ul>
            </div>
           
            
            </div>
                    <div className='card' id="moviecard">
                        <img src={fetchdata.background_image_original} />

                        {/* <div className='xls'> 
                        <figcaption>
                        <div className='hidden-xs'>
                            <span className="icon-star">staricon</span>
                            <h4 className='rating'>7.1/10</h4>
                            <h4 className='type'>{flims.title}</h4>
                            <span className='button-green'>View Details</span>
                        </div>
                        </figcaption>
                        </div> */}
                        <button className='button-xs'>Watch Now</button>

                        {/* <div className='footer'>
                        <div className='movie-name'></div>
                        <div className='browse-movie-year'></div>
                        <div className='id'></div>
                        </div> */}
                    </div>

                    <div className='description-se'>
                      <h1>{fetchdata.title}</h1>
                      <h2>{fetchdata.year}</h2>
                      <h2>{fetchdata.genres}</h2>
                      <h2>like:{fetchdata.like_count}</h2>
                      <h2>Rating:{fetchdata.rating}/10</h2>
                      
                    </div>

                    
                    
                  
              
    </div>


    
    <div className='image'>
                      <img src={fetchdata.background_image_original}className='img1'/>
                      <img src={fetchdata.medium_cover_image}className='img2'/>
                      <img src={fetchdata.medium_cover_image}className='img3'/>
    </div>

    <div className='plotsummarry'>
      <h1>Plot Summarry</h1>
      <p>{fetchdata.description_full}</p>
    </div>
    
    <div className='footer-xsd'>
      
    </div>


                    
      </div>

    
  )
}

export default Movie