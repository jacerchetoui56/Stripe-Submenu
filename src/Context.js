import React, { useContext, useState } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

function AppProvider({ children }) {

    // creation of states
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSSubmenuOpen] = useState(false)
    //? we are setting a state for the location of submenu because it changes and we want to render it everytime
    const [location, setLocation] = useState({})
    //? set the content of the submenu
    const [page, setPage] = useState({ page: '', links: [] })
    // functions
    function toggleSidebar() {
        setIsSidebarOpen(prev => !prev)
    }
    function openSubmenu(text, coords) {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setLocation(coords)
        setIsSSubmenuOpen(true)
    }
    function closeSubmenu() {
        setIsSSubmenuOpen(false)
    }
    return <AppContext.Provider
        value={{
            isSidebarOpen,
            toggleSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            location,
            page
        }
        }>
        {children}
    </AppContext.Provider>
}

function useGlobalContext() {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext }