import React, { useState } from 'react';

function ToggleImage() {
  const [image, setImage] = useState('https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0');
   
  function handleClick() {
    if (image === 'https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0') 
    {
      setImage('https://tse1.mm.bing.net/th?id=OIP.H5SjGpCDWfw_LesDlrigkQHaEK&pid=Api&P=0');
    } else {
      setImage('https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0');
    }
  }

  return (
    <div>
    <h1>Toggle Images</h1>
    <img src={image} alt="Toggle Image" onClick={handleClick} />
    </div>
  );
}

export default ToggleImage;