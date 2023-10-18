import React, { useEffect, useRef } from 'react';

import ThemeProvider from '../utils/theme.js';
import useWebWorker from './useWebWorker.js';
import Grid from '../components/Grid/Grid.js';
import { useStateRefCallback } from './useStateRefCallback.js';
import Button from '../components/Button/Button.js';
import { useInView } from './useInView.js';
import { useMutationObserver } from './useMutationObserver.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hooks',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = () => {
  const [result] = useWebWorker({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customFunction: (e) => e.reverse(),
    debug: true,
  });

  const [data, setData, dataRef] = useStateRefCallback('refCallback');

  const ref = useRef();

  const isIntersecting =
    useInView(ref, {
      threshold: 0.1,
      rootMargin: '1px',
    }) ?? false;

  useEffect(() => {
    if (isIntersecting) {
      alert('useInView kırmızı alanı buldu');
    }
  }, [isIntersecting]);

  let degisim = 1;
  const handleMutation = (mutations) => {
    console.log('DOM Değişikliği Oluştu:', mutations);
  };

  useMutationObserver({
    target: document.getElementById('mutation'), // İzlemek istediğiniz DOM hedefi (örneğin, <body> öğesi)
    callback: handleMutation, // Değişikliklere tepki verecek işlev
    options: { config: { attributes: true, style: true } }, // Opsiyonel olarak izleme seçenekleri
  });

  return (
    <ThemeProvider>
      <Grid container direction="column" style={{ height: 900 }}>
        <Grid mbt>
          useWebWorker : {result} (Farklı threadde çalışıp sonuç döndürdü)
        </Grid>
        <Grid mbt>
          useStateRefCallback : {data}==={dataRef.current} (State değerini
          refede ekler){' '}
          <Button
            onClick={() => setData('Yeni Ref Data', console.error)}
            label={'Değer Değiştir'}
          />
        </Grid>
        <Grid mbt>
          useInView : {isIntersecting.toString()} (Scroll hareketinde node-un
          görünür olduğunu döndürür)
        </Grid>
        <Grid mbt>
          useMutationObserver : (Target elemandaki Dom değişimi olduğunda
          tetiklenir){' '}
          <Button
            onClick={() => {
              const node = ref.current;
              node.style.width = `calc(100% - ${degisim++}px)`;
            }}
            label={'Değer Değiştir'}
          />
        </Grid>

        <div
          ref={ref}
          id="mutation"
          style={{
            background: 'red',
            marginTop: 400,
            width: '100%',
            height: 100,
          }}
        >
          Ref Alanı
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
