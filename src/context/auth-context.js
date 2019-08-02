import React from 'react'

// We can initialize createContext with an object with default values.
// Also with bools, string, int, etc.
// In the end, it is a globally available object. "Globally", where we enable it.

// If we initialize with all values we want, IDEs work better with autocomplete.
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;