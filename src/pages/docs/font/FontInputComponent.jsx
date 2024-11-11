import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FontInputComponent = () => {
  const font = useSelector((state) => state.font)
  const dispatch = useDispatch();

  const[result, setResult] = useState("");
  
  return (
    <div>
      
    </div>
  );
};

export default FontInputComponent;