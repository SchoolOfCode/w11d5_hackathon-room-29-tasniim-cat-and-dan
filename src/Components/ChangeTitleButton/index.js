import React from 'react';

export default function ChangeTitleButton() {

  function handleClick (){
    document.title = "Well done!"
  }
  return (<div>
      <button onClick={handleClick}>Change Title!</button>
  </div>
  );
}
