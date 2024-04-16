import  {createContext, useContext, useState} from 'react';

// Create a context
const SkillsContext = createContext();

export const useAuth = () => {
    return useContext(SkillsContext);
}

// Define the AuthProvider component
export const SkillsProvider = (props) => {
    // Define state variables using useState
    const [skills, setSkills] = useState([]); // Represents the authenticated user
    const [interests, setInterests] = useState([]); // Represents the login status

    // Define the value object containing state and functions
    const value = {
        skills,
        setSkills,
        interests,
        setInterests
    };

    // Return the AuthContext.Provider with the value object and children
    return (
        <SkillsContext.Provider value={value}>
            {props.children}
        </SkillsContext.Provider>
    );
};
