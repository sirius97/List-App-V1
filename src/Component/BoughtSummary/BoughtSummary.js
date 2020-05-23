import React from 'react';
import Aux from '../../Hoc/Auxi';

const BoughtSummary = (props) => {
    const summary = props.bought.map(el => {
    return <li key={el.id}>{el.name} : {el.quantity}</li>
    })

    return(
        <Aux>
            <p><strong>This is what you bought!!</strong></p>
            <ul>
                {summary}
            </ul>
        </Aux>
    );
}

export default BoughtSummary;