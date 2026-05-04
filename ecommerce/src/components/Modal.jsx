import { useState, useEffect } from "react"
import { useModal } from "../context/ModalContext"
import { createPortal } from "react-dom"
import { Button } from "./Button"
import { FiX } from "react-icons/fi"

export const Modal = () => {
    const {isOpen, closeModal} = useModal()
    const modalRoot = document.getElementById("modal-root")

    useEffect((event) => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    if(!isOpen) return null

    return(
        createPortal(
            <div 
                className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                onClick = {() => closeModal()}    
            >
                <div
                    className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}    
                >
                    <Button
                        className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                        onClick={() => closeModal()}
                    >
                        <FiX size={20} />
                    </Button>
                    <h2 className="text-2xl font-bold mb-4">Заголовок модалки</h2>
                    <p className="text-gray-600">Содержимое модалки</p>
                </div>
            </div>,
            modalRoot
        )
    )
}