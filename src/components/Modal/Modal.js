import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import stylesModule from './Modal.module.css';
import Button from '../Button/Button.js';
import { CloseSvg } from '../Icons/index.js';
import { useTheme } from '../../utils/theme.js';

const Modal = ({ open, onClose, children, style, heading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--shadowColor': theme.shadowColor,
  };
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
            label={<CloseSvg />}
            type="secondary"
            rounded
            onClick={onClose}
          />
        </div>
        <div
          className={`${stylesModule.modalContent}`}
          style={{ ...style, ...styleVariables }}
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
  children: PropTypes.children,
};

export default Modal;
