import React, { useEffect ,useState} from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY} from "../../Constants/Constants"
import './RowPost.css'
import Youtube from 'react-youtube'
function RowPost(props) {

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    } }
const handleMovie=(id)=>{
  console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!==0){ 
      setUrlId(response.data.results[0])
    }else{
      console.log("array is empty");
    }
   
  })
}

  const [movie ,setMovies]=useState([])
  const [urlId,setUrlId]=useState("")
  console.log("urlId");
  console.log(urlId);
  console.log("urlId");
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
       setMovies(response.data.results)
    
  
    }).catch((err)=>{
      alert("network err")
      console.log(err);})
  })
  
  return (
    <div className='row' >
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movie.map((obj)=>

            <img onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall ? "smallPoster"  : 'poster'} alt='poster' src= {`${imageUrl+obj.backdrop_path}`} />

          )
        }  
       
      </div>

      <div className='video'>
                {urlId && <section>
                    <i onClick={() => { setUrlId('') }} style={{ fontSize: '60px' }}>&times;</i>
                    <Youtube videoId={urlId.key} opts={opts} />
                </section>}
            </div>

      {/* { urlId && <Youtube opts={opts} videoId={urlId.key}/>} */}
    </div>
  )
}

export default RowPost


// <div className="row">
//             <h2>{props.title}</h2>
//             <div className="posters">
//                 {post.map((obj, index) =>
//                     <div>
//                         <img onClick={() => {handleMovieClick(obj.id); }} 
//                         className={props.isSmall ? 'smallPoster' : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
//                     </div>
//                 )}

//             </div>

//             <div className='video'>
//                 {urlId && <section>
//                     <i onClick={() => { setUrlId('') }} style={{ fontSize: '60px' }}>&times;</i>
//                     <YouTube videoId={urlId.key} opts={opts} />
//                 </section>}
//             </div>
//         </div>