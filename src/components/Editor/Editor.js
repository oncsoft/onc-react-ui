import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import { Editor as EditorDraft } from 'react-draft-wysiwyg';
import PropTypes from 'prop-types';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import stylesModule from './Editor.module.css';
import { useTheme } from '../../utils/theme';

const Editor = ({
  imageCallback,
  value = '',
  onChange,
  type = 'primary',
  gradient,
}) => {
  const blocksFromHTML = convertFromHTML(value);
  const initialContentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContentState),
  );
  const theme = useTheme();
  const firstValue = useRef(false);

  useEffect(() => {
    if (firstValue.current) {
      return;
    }

    if (value) {
      const blocksFromHTML = convertFromHTML(value);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
      firstValue.current = true;
    }
  }, [value]);

  useLayoutEffect(() => {
    if (type === 'default') {
      return;
    }
    const root = document.documentElement;

    root.style.setProperty(
      '--themeBackgroundColor',
      gradient
        ? theme.gradientColors
        : theme[`${type}Color`] + ',' + theme[`${type}Color`],
    );
    root.style.setProperty('--themeTextColor', 'white');
  }, [gradient, type]);

  const uploadCallback = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        imageCallback?.({ data, type: 'success' });
        resolve({ data: { link: data.target.result } });
      };
      reader.onerror = (error) => {
        imageCallback?.({ type: 'error', error });
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const onEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const html = stateToHTML(contentState);
    onChange(html);
  };

  const getClass = (key) => {
    if (type === 'default') {
      return '';
    }
    return stylesModule[key];
  };

  return (
    <div className={getClass('editorContainer')}>
      <EditorDraft
        editorState={editorState}
        onEditorStateChange={onEditorChange}
        toolbar={{
          options: [
            'inline',
            'image',
            'emoji',
            'blockType',

            'list',
            'textAlign',
            'link',
          ],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
          },
          list: {
            inDropdown: true,
          },
          image: {
            previewImage: true,
            uploadCallback,
            alt: { present: true, mandatory: true },
          },
          blockType: {
            className: stylesModule.blackColor,
            dropdownClassName: stylesModule.blackColor,
          },
          textAlign: {
            inDropdown: true,
          },
          link: {
            inDropdown: true,
          },
          emoji: {
            inDropdown: true,
          },
        }}
        toolbarClassName={getClass('themeToolbar')}
      />
    </div>
  );
};

Editor.propTypes = {
  imageCallback: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'default']),
  gradient: PropTypes.bool,
};

export default Editor;
