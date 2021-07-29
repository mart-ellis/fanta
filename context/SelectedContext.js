import { createContext, useContext, useState } from "react";

const SelectedContext = createContext()

export function useSelected() {
    return useContext(SelectedContext);
}

export function SelectedProvider({children}) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const value = {
        selectedIndex,
        setSelectedIndex
    }

    return (
        <SelectedContext.Provider value={value}>
            {children}
        </SelectedContext.Provider>
    )
}
