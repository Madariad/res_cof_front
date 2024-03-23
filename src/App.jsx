import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Main from '@component/main'
import NavBar from '@component/NavBar/index.jsx'

import CurentPg from '@component/curentPg';

import axios from "axios";

import { useEffect , useState } from "react";



function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [sortedData, setSortedData] = useState('l');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/restaurants')
      .then(function (response) {
     
        setData(response.data);
        setLoading(false);
      }).catch(function (error) {
        setLoadError(true);
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    let filteredResult = data;

    if (searchTerm) {
      filteredResult = filteredResult.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    const sortedResult = filteredResult.slice().sort((a, b) => sortedData === 'l' ? a.price - b.price : b.price - a.price);
    setSearchData(sortedResult);
  }, [searchTerm, sortedData, data]);



  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (state) => {
    setSortedData(state);
  };

    return (

      <div className='container'>
      
              <div className="mb-3">
                  <NavBar onSearch={handleSearch} sortedState={sortedData} onSort={handleSort} />
            </div>
          
            <Router>
                <Routes >
                  { searchData.length === 0 ? <> loading.................... </>  : 
              
                  <Route
                    path="/"
                    element= {<Main data={searchData} loading={loading} loadError={loadError}/>}
                  />
                  }

                  <Route
                    path="/:id"
                    element= {<CurentPg />}
                  />

                  </Routes>
              </Router>
      
      </div>

  )
}

export default App;
