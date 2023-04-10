import { useState, useEffect } from "react";
import axios from "axios";
import Config from "react-native-config"; //used react native config ..since the development for .env it was chaotic 

const rapidApiKey=Config.RAPID_API_KEY;
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
    headers: {
      'X-RapidAPI-Key': 'df56c067acmsh054d5dadff51d9ep1d61f2jsnd3c517ba9001',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
 
  // const options = { 
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   headers: {
  //     'X-RapidAPI-Key':'df56c067acmsh054d5dadff51d9ep1d61f2jsnd3c517ba9001',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   },
  //   params: { ...query}
  // };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
     alert('There is an error')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
