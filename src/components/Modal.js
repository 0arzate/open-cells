import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, children, modalOverEverything }) {
  const [node, setNode] = useState(null)
  const isOpen = open ? 'block' : 'hidden'
  const modalOverEverythingStyles = modalOverEverything ? 'z-[60]' : 'z-20'

  useEffect(() => {
    setNode(document.querySelector('#modal'))
  }, [])

  return node
    ? createPortal(
        <div
          className={`${isOpen} ${modalOverEverythingStyles} min-h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0`}
        >
          {children}
        </div>,
        node
      )
    : null
}
