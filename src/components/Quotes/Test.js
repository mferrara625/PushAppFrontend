import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=workout%20motivation&key=AIzaSyAfW0gIL0pkef1rVEGm1VKEqLb4B4wzVCM', {
                    headers: {
                        Authorization: 'Bearer ya29.A0AVA9y1vUqF7sdIUEALmnRz-eIJQ23onsowjL6zC6NwiVmTnzofSy31q_M9CnliaoBSlnLJTrOaNBjLDZxfVW6oY2zcR6RHg6dhopzBP7fdz2c4aNTSET0Lg_vmBWN5WnyNtBrcmDElUym1zitEVet_iiY3YqaCgYKATASATASFQE65dr8rKGQXCh3oLJcp9vvInAWSA0163' ,
                        Accept: 'application / json'
                    }
                }
                );
                //   setData(response[Math.floor(Math.random() * response.length)]);
                console.log(response);


          
        } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);
    return (
        <div>Test</div>
    )
}

export default Test