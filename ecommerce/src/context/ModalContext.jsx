import { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const value = {
        isOpen,
        openModal,
        closeModal
    }

    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal может быть использован только с ModalProvider")
    }
    return context
}