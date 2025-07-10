import { useEffect, useRef } from "react";
import styled from "styled-components";
import useLockBodyScroll from "../../hooks/useLockBodyScroll.js";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.navigation - 1};
  opacity: 0;
  animation: fadeIn 0.3s forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Panel = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${({ theme }) => theme.sizes.navModalWidth};
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  z-index: ${({ theme }) => theme.zIndex.navigation};
  transform: translateX(100%);
  animation: slideIn 0.3s forwards;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.l};

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: ${({ theme }) => theme.spacing.m};
  }
`;

export default function Modal({ onClose, children }) {
  const panelRef = useRef(null);

  // Body scroll lock
  useLockBodyScroll(true);

  // ESC‑Taste & einfacher Fokus‑Trap
  useEffect(() => {
    const firstFocusable = panelRef.current?.querySelector(
      'button, a, [tabindex]:not([tabindex="-1"])',
    );
    firstFocusable?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = panelRef.current.querySelectorAll(
          'button, a, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (
          e.shiftKey
            ? document.activeElement === first
            : document.activeElement === last
        ) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <Backdrop onClick={onClose} />
      <Panel ref={panelRef} aria-modal="true" role="dialog">
        {children}
      </Panel>
    </>
  );
}
