import React from 'react';

const Card = (props) => {
    const {id, name, title, email} = props;
    return (
        <div className='bg-light-blue dib br4 pa5 ma3 grow bw4 shadow-5'>
            <img alt='robot' src={`https://robohash.org/set_set4/${props.id}?200x200`} />
            <div><center>
                <h2>{props.name}</h2>
                <h3>{props.title}</h3>
                <p>{props.email}</p>
            </center></div>
        </div>
    );
}

export default Card;
