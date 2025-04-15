import React from 'react';

const BannerButton = ({img, onPress}) => {
    return (
        <button className='col-lg-3 col-md-4 col-sm-12 mt-4' onClick={onPress}>
            <img src={img}/>
        </button>
    );
}

export default BannerButton;