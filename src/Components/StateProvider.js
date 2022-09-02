import React, { createContext, useContext, useReducer } from 'react'

// Prepare the data Layer
export const StateContext = createContext()

// Warp Our App
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

)

// Pull Information From The the data Layer
export const useStateValue = () => useContext(StateContext)