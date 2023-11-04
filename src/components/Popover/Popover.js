import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '../../hooks/useOutsideClick';
import styleModules from './Popover.module.css';
import { getStyleVariables, useTheme } from '../../utils/theme';
const Popover = ({
  children,
  position,
  open,
  setOpen,
  targetRef,
  delayClose,
  style = {},
}) => {
  const theme = useTheme();
  const stylesVariables = getStyleVariables({ theme });
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef(null);

  const setOpenStatus = (status) => () => {
    setOpen(status);
  };

  if (!delayClose) {
    useOutsideClick(targetRef, setOpenStatus(false));
    useOutsideClick(popoverRef, setOpenStatus(false));
  }

  useEffect(() => {
    if (open && delayClose) {
      const closeTimer = setTimeout(() => {
        setOpen(false);
      }, delayClose);

      return () => clearTimeout(closeTimer);
    }
  }, [open, delayClose]);

  useLayoutEffect(() => {
    if (popoverRef.current && targetRef.current) {
      const triggerRect = targetRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top-left':
          top = triggerRect.top - popoverRect.height;
          left = triggerRect.left;
          break;
        case 'top-right':
          top = triggerRect.top - popoverRect.height;
          left = triggerRect.right - popoverRect.width;
          break;
        case 'bottom-left':
          top = triggerRect.bottom;
          left = triggerRect.left;
          break;
        case 'bottom-right':
          top = triggerRect.bottom;
          left = triggerRect.right - popoverRect.width;
          break;
        default:
          top = triggerRect.top - popoverRect.height;
          left = triggerRect.left;
      }

      setPopoverPosition({ top, left });
    }
  }, []);

  const popoverContent = open && (
    <div
      className={`${styleModules.popover} ${styleModules[position]}`}
      ref={popoverRef}
      style={{
        top: popoverPosition.top,
        left: popoverPosition.left,
        ...stylesVariables,
        ...style,
      }}
    >
      {children}
    </div>
  );

  return (
    <div className={`${styleModules.popoverContainer}`} style={stylesVariables}>
      {popoverContent}
    </div>
  );
};

Popover.propTypes = {
  targetRef: PropTypes.ref,
  children: PropTypes.object,
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  style: PropTypes.style,
  delayClose: PropTypes.number,
};

export default Popover;
