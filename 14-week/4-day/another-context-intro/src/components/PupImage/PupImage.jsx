// import speedy from '../../pups/speedy-pup.jpg';
// import banana from '../../pups/banana-pup.jpg';
// import sleepy from '../../pups/sleepy-pup.jpg';

import { useContext } from 'react';
import { PupContext } from '../../context/PupContext';

const PupImage = () => {
    const { puppyType } = useContext(PupContext);

    console.log(puppyType);

    // console.log(props);
    // console.log(props.children);

    return (
        <>
            {/* {props.children} */}
            <img src={puppyType} alt="pup" />
        </>
    );
};

export default PupImage;
