import React, { useEffect, useState } from 'react';

import  Layout from'./Layout'


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)


  useEffect(() => {
    if (window.localStorage.getItem('DarkTheme') !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem('DarkTheme')))
    }
  }, [])


  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }


    window.localStorage.setItem('DarkTheme', JSON.stringify(darkTheme))

  }, [darkTheme])



  return (<>
     <Layout darkTheme={darkTheme}  setDarkTheme={setDarkTheme} />
    
    </>
  );
}

export default App;
