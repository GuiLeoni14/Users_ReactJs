import { useReducer } from 'react';
import { PersonContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import P from 'prop-types';
export default function PersonProvider({ children }) {
    const [statePerson, personDispatch] = useReducer(reducer, data);
    return <PersonContext.Provider value={{ statePerson, personDispatch }}>{children}</PersonContext.Provider>;
}

PersonProvider.propTypes = {
    children: P.node,
};
