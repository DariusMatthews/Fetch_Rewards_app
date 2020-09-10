import React, { useState, useEffect } from 'react';
import List from './components/List/List';
import './App.scss';

function App() {
  // state for api array
  const [list, setList] = useState([]);

  // fetch array when component mounts
  // send request to proxy to bypass CORS error
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then(res => res.json())
      .then(data => {
        // filter out blank or null values
        const filterData = data.filter(entry => entry.name !== '' && entry.name !== null);

        // sort data by listId and Name (id number) in ascending order
        const sortedData = filterData.sort((a, b) => a.listId - b.listId || a.id - b.id);

        // set list state to data
        setList(sortedData);
      })
      .catch(err => { if (err) throw err });
  }, []);

  return (
    <div className="app">
      {
        list.length !== 0
          ? <List />
          : <h1>Now loading...</h1>
      }
    </div>
  );
}

export default App;
