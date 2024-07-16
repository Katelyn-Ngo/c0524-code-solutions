import { createPortal } from 'react-dom';
import './App.css';
import React, { useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  positionTo?: HTMLElement | null;
  children: React.ReactNode;
  opacity?: number;
};

export function Popup({
  isOpen,
  onClose,
  positionTo,
  children,
  opacity = 0.5,
}: Props) {
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      const r = positionTo?.getBoundingClientRect();
      const top = r ? r.top + r.height : '50%';
      const left = r ? r.left + r.width / 2 : '50%';
      if (popupRef.current) {
        popupRef.current.style.top = `${top} px`;
        popupRef.current.style.left = `${left} px`;
      }
    }
  }, [isOpen, positionTo]);
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="popup-backdrop"
        style={{ opacity }}
        onClick={onClose}></div>
      <div
        className="popup-menu-wrapper"
        ref={popupRef}
        style={{ position: 'absolute' }}>
        {children}
      </div>
    </>,
    document.body
  );
}
