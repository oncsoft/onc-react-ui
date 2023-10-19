import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';
import { ThrashSvg, UploadSvg } from '../Icons';
import { useTheme } from '../../utils/theme';
import styleModules from './UploadImage.module.css';

const UploadImage = ({
  value = [],
  onChange,
  label = 'Resim Yükle',
  isMultiple = false,
}) => {
  const [selectedImages, setSelectedImages] = useState(value);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const inputRef = useRef(null);
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          imageArray.push({ src: event.target.result });

          if (imageArray.length === files.length) {
            setSelectedImages(imageArray);
            onChange(imageArray);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
    onChange(newImages);
  };

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  return (
    <Grid container direction="column">
      <Grid>
        <div className={styleModules.gallery}>
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className={styleModules.imageContainer}
              style={styleVariables}
            >
              <img
                src={image.src}
                alt={`Selected ${index}`}
                className={
                  styleModules[currentImageIndex === index ? 'active' : '']
                }
                onClick={() => setCurrentImageIndex(index)}
              />
              <Button
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  background: theme.errorColor,
                }}
                icon={<ThrashSvg />}
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
        </div>
      </Grid>
      <Grid>
        <Button
          onClick={handleOpenFileInput}
          icon={<UploadSvg />}
          style={{ width: '100%' }}
          label={'  ' + label}
        />

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={isMultiple}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </Grid>
    </Grid>
  );
};

UploadImage.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isMultiple: PropTypes.bool,
};
export default UploadImage;
