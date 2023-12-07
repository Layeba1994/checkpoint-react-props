
import React from "react";
// import Players from "./Players";
import Player from "./Player";
import Players from "./Players"

const PlayersList = () => {
  return (
       <>                     
      
     {Players.map(Players =>(
      
        <Player key ={Players} Players={Players} />
     ))
  
     }
    </>
  );
};

export default PlayersList;
