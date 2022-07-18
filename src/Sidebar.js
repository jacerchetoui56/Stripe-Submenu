import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './Context'

export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useGlobalContext()

    return (
        <aside className={`sidebar-wrapper ${isSidebarOpen ? 'show' : ''}`}>
            <div className="sidebar">
                <button className="close-btn"
                    onClick={toggleSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item, index) => {
                        const { links, page } = item
                        return <article key={index}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link, index) => {
                                    const { label, icon, url } = link
                                    return <a key={index} href={url}>
                                        {icon}
                                        {label}
                                    </a>
                                }
                                )}
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    )
}
