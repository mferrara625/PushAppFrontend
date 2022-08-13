import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const {data: response} = await axios.get('https://type.fit/api/quotes');
        setData(response[Math.floor(Math.random() * response.length)]);
        console.log(response[0]);
        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
        {data ?
        <h1>
             "{data.text}"
            - {data.author} 
        </h1>
        :
        <h1>
            "Loading..."
        </h1>
}
    </div>
  );
}

export default Quote;