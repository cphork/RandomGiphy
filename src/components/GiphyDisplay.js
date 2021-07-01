import React from 'react'



const GiphyDisplay = ({giphys}) => {

        const loaded = () => {
            return (
                <>
                  
                  <img src={giphys.data.image_url} alt={giphys.data.id} />
                  <h2>Random Gifs</h2>
                </>

            )

        }
        
        const loading = ()=> {
            return <h1>No Image to Display</h1>
        }

            return giphys ? loaded () : loading ()
            

          
            
    }
          

    

export default GiphyDisplay