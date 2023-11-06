import React, { useEffect, useRef, useState } from 'react';
import InfiniteTable from '../InfiniteTable/InfiniteTable';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { PenSvg, ThrashSvg } from '../Icons';
import FormBuilder from '../FormBuilder/FormBuilder';
import useStateRefCallback from '../../hooks/useStateRefCallback';
import { useTheme } from '../../utils/theme';

const ReactCrud = ({ url, token }) => {
  const [modal, setModal] = useStateRefCallback({ open: false });
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const formBuilderRef = useRef();

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile yetkilendirme
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP Error: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(generateTable(data.data));
        setColumns(convertColumns(data.fields));
      })
      .catch((error) => {
        console.error('Hata oluştu: ' + error.message);
      });
  }, []);

  const convertColumns = (columns = []) => {
    const columnList = columns.map((column) => ({
      ...column,
      name: column.key,
      label: column.header,
    }));

    columnList.push({ key: 'actions_operations', name: '' });
    return columnList;
  };
  const theme = useTheme();

  const generateTable = (data) => {
    const list = data.map((item) => ({
      ...item,
      actions_operations: (
        <>
          <Button
            size="sm"
            icon={<ThrashSvg />}
            style={{ background: theme.errorColor, marginRight: 5 }}
            label=""
            onClick={remove(item.id)}
          />
          <Button
            size="sm"
            icon={<PenSvg />}
            label=""
            onClick={edit(item.id)}
          />
        </>
      ),
    }));

    return list;
  };

  const remove = (id) => () => {
    fetch(url + '/destroy/' + id, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile yetkilendirme
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP Error: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.error(data);
      })
      .catch((error) => {
        console.error('Hata oluştu: ' + error.message);
      });
  };

  const edit = (id) => () => {
    fetch(url + '/' + id, {
      headers: {
        Authorization: `Bearer ${token}`, // Bearer token ile yetkilendirme
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP Error: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.error(data);
        setModal({ open: true, mode: 'update' }, () => {
          formBuilderRef.current.setData(data);
        });
      })
      .catch((error) => {
        console.error('Hata oluştu: ' + error.message);
      });
  };

  const save = (mode) => () => {
    fetch(url + '/' + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(formBuilderRef.current.getData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP Error: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.error(data);
      })
      .catch((error) => {
        console.error('Hata oluştu: ' + error.message);
      });
  };

  return (
    <Grid container direction="column">
      <Grid item={12} mbt>
        <Button
          label="Yeni Ekle"
          onClick={() => {
            setModal({ open: true, mode: 'create' });
          }}
          style={{ width: '100%' }}
          type="secondary"
        />
      </Grid>
      <InfiniteTable data={data} columns={columns} fetchData={() => {}} />
      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false })}
        height={300}
        heading={'Düzenleme'}
      >
        <FormBuilder
          data={columns.slice(0, columns.length - 1)}
          ref={formBuilderRef}
        />
        <Button
          style={{ width: '100%' }}
          label={modal.mode === 'create' ? 'Kaydet' : 'Güncelle'}
          onClick={save(modal.mode)}
        />
      </Modal>
    </Grid>
  );
};

export default ReactCrud;
