import React, { ReactChild, useState } from "react";

export const UserContext = React.createContext({
    profile: {
        fullname: "",
        username: "",
        email: "",
        avatar: "",
        bio: "",
    },
    updateProfile: () => {},
});

export const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        fullname: "",
        username: "",
        email: "",
        avatar: "",
        bio: "",
    });

    const updateProfile = (newProfile) => {
        setProfile(newProfile);
    }

    return (
        <UserContext.Provider value={{ profile, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
}
