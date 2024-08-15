import { createContext, useContext, useState } from 'react';
import banana from '../pups/banana-pup.jpg';

export const PupContext = createContext();

{
    /* <PupContext.Provider value={{ data: 'Info' }}>
    <div>Hey</div>
</PupContext.Provider>; */
}

export const PupProvider = (props) => {
    const [puppyType, setPuppyType] = useState(banana);

    console.log(props);

    return (
        <PupContext.Provider
            value={{ anyKey: 'any value', puppyType, setPuppyType }}
        >
            {props.children}
        </PupContext.Provider>
    );
};

export const usePuppyContext = () => useContext(PupContext);
