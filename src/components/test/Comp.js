import React from 'react';
import { Link } from 'react-router-dom';
 
 const Comp = (props) => {
     console.log(props);
     const name = props.location.state.name;
     console.log(name);
    return(
        <div>
            { props.location.state.test.map( (test) => {
                return(
                    <Link className='list-item' to={{pathname: `/tests/${name}/${test.key}`,
                    state : { test }            
                }} key={test.key}>{test.name}</Link>
                );
            } ) }
        </div>
    );
}

export default Comp;