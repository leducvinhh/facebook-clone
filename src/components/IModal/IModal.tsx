interface IModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

import classnames from 'classnames'
import { createPortal } from 'react-dom'

export default function IModal({ open, onClose, children }: IModalProps) {
  return createPortal(
    <div
      className={classnames('fixed inset-0 bg-white/80 ', {
        hidden: !open,
        'flex items-center justify-center': open
      })}
      onClick={onClose}
    >
      {children}
    </div>,
    document.body
  )
}
