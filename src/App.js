
import React,{createContext} from 'react';

import ItemsList from './itemsList';
import AddItem from './addItem';

const App = () => {


  
  return (
    <div className='App'>
      <ItemsList/>
      <AddItem/>
    </div>
  )
}

export default App
