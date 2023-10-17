import React,{useState,useEffect}from 'react'
import "../css/index.css";
import axios from 'axios';
import Movie from '../Index_Interface';
import { useNavigate,Link} from "react-router-dom";
const baseURL="https://yts.mx/api/v2/list_movies.json";



const Index = () => {
    const[fetchdata,setfetchdata]=useState<Movie[]>([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setfetchdata(response.data["data"]['movies']);
        })

      }, []);
      
      
    // const clicked=()=>{
    //     navigate("/movie");
    // }
      
    
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
            
            <div className='xl'>
                <h1>Download YTS YIFY movies:HD smallest size</h1>
                <p>Welcome to the official <b>YTS.MX</b> website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.<br></br>
                <a href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies" title="IMPORTANT - YTS.MX is the only new official domain for YIFY Movies"><b>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</b></a>
                </p>
            </div>

            <div className='xs'>
            <img src="/images/telegram.svg" width="16" height="16"/>
            <a href="https://t.me/ytsmx_updates" target="_blank" rel="nofollow">YTSMX_UPDATES</a>
            <img src="/images/twitter.svg" width="16" height="16"></img>
            <a href="https://twitter.com/ytsyify/status/1712717835611357559" target="_blank" rel="nofollow">Upcoming: THE RETIREMENT PLAN (2023) on 17 October.</a>
            <br/>
            <br/>
            </div>

            <div className='popular-downloads'>
                <div className='row'>
                    <h1> </h1>
                    <h1 className="xx-s" >Popular Downloads</h1>
                    <h1 className='fe'>more featured...</h1>
                    
                </div>
                <hr></hr>
                <div className='main'>
            {
                fetchdata.map(flims=>(
                    <>
                    <Link to='/movie'state={flims.id}>
                    <div className='card'>
                        <img src={flims.large_cover_image} />

                        <div className='xls'> 
                        {/* <figcaption>
                        <div className='hidden-xs'>
                            <span className="icon-star">staricon</span>
                            <h4 className='rating'>7.1/10</h4>
                            <h4 className='type'>{flims.title}</h4>
                            <span className='button-green'>View Details</span>
                        </div>
                        </figcaption> */}
                        </div>
                    

                        <div className='footer'>
                        <div className='movie-name'>{flims.title}</div>
                        <div className='browse-movie-year'>{flims.year}</div>
                        <div className='id'>{flims.id}</div>
                        </div>
                    </div>
                    </Link>
                    
                    </>
                ))
            }
            </div>
                
            </div>



            


            <footer>
                <div className='foot'></div>
            </footer>
            

            
        </div>
       
    </div>
  )
}

export default Index