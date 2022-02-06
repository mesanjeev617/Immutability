import React from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';



function App() {

  const [name, setName] = useLocalStorage('name', '');
  console.log('hhhhhh');
  useUpdateLogger(name);
  return (
    <input 
      type="text"
      value={name}
      onChange={e=> setName(e.target.value)}
    />
  );
  
}

export default App;
