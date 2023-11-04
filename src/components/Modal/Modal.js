import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import stylesModule from './Modal.module.css';
import Button from '../Button/Button.js';
import { CloseSvg } from '../Icons/index.js';
import { getStyleVariables, useTheme } from '../../utils/theme.js';

const Modal = ({
  open,
  onClose,
  children,
  style,
  heading,
  width = 600,
  height = 600,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const theme = useTheme();
  const styleVariables = getStyleVariables({ theme });
  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsDragging(true);
      offsetX.current =
        e.clientX - modalRef.current.getBoundingClientRect().left;
      offsetY.current =
        e.clientY - modalRef.current.getBoundingClientRect().top;
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const modal = modalRef.current;
      if (modal) {
        const newX = e.clientX - offsetX.current;
        const newY = e.clientY - offsetY.current;
        modal.style.left = newX + 'px';
        modal.style.top = newY + 'px';
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const renderModal = () => {
    return open ? (
      <div
        className={`${stylesModule.modal}`}
        style={styleVariables}
        ref={modalRef}
      >
        <div
          className={`${stylesModule.modalHeader}`}
          style={styleVariables}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {heading}
          <Button
            icon={<CloseSvg />}
            label=""
            type="secondary"
            rounded
            noShadow
            style={{ width: '2rem', height: '2rem' }}
            onClick={onClose}
          />
        </div>
        <div
          className={`${stylesModule.modalContent}`}
          style={{ ...style, ...styleVariables, width, height }}
        >
          {children}
        </div>
      </div>
    ) : null;
  };
  return ReactDOM.createPortal(renderModal(), document.body);
};

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  heading: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.children,
};

export default Modal;
