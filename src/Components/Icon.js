import React from 'react';

const url = 'https://willianjusten.com.br/assets/img/react-svg/sprite.svg';

const Icon = (props) => (
    <svg viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
        <use xlinkHref={`${url}#icon-${props.icon}`}/>
    </svg>
);

export default Icon;