import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, children }) {
  const [node, setNode] = useState(null)
  const isOpen = open ? 'block' : 'hidden'

  useEffect(() => {
    setNode(document.querySelector('#modal'))
  }, [])

  return node
    ? createPortal(
        <div
          className={`${isOpen} z-20 min-h-screen bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0`}
        >
          {children}
        </div>,
        node
      )
    : null
}
