import React from "react";
import Main from "./props";

import './Count.css'

const Count = () => {

    const [count, countFunc] = React.useState(0)
    function add(params) {
        countFunc(prevState => count + 1)
    }
    function sub(params) {
        countFunc(prevState => count - 1)
    }
    function reset(params) {
        countFunc(0)
    }
    
    return ( 
        <div>
           <Main 
           count={count}
           addition={add}
           subtract={sub}
           reset={reset}
           />

        
        </div>
     );
}
 
export default Count;