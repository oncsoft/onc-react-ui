import React, { useEffect, useRef, useState } from 'react';
import Button from './components/Button/Button.js';
import Grid from './components/Grid/Grid.js';
import ThemeProvider from './utils/theme.js';
import Input from './components/Input/Input.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import Icon from './components/Icon/Icon.js';
import AddSvg from './components/Icons/AddSvg.js';
import Calendar from './components/Calendar/Calendar.js';
import Checkbox from './components/Checkbox/Checkbox.js';
import Modal from './components/Modal/Modal.js';
import Editor from './components/Editor/Editor.js';
import DateTime from './components/DateTime/DateTime.js';
import Switch from './components/Switch/Switch.js';
import { useAlert } from './components/Alert/useAlert.js';
import Spinner from './components/Spinner/Spinner.js';
import Dialog from './components/Dialog/Dialog.js';
import VirtualList from './components/VirtualList/VirtualList.js';
import { timeBasedUUID } from './utils/helper.js';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll.js';
import UploadImage from './components/UploadImage/UploadImage.js';
import TextArea from './components/TextArea/TextArea.js';
import ColorPicker from './components/ColorPicker/ColorPicker.js';
import Popover from './components/Popover/Popover.js';
import InfiniteTable from './components/InfiniteTable/InfiniteTable.js';
import FormBuilder from './components/FormBuilder/FormBuilder.js';
import ReactCrud from './components/ReactCrud/ReactCrud.js';

let i = 1;

const App = () => {
  const [type, setType] = useState('primary');
  const [value, setValue] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('<b>sadasd</b>  asssss');
  const [d, setD] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState();
  const { showAlert } = useAlert();
  const [color, setColor] = useState('#000');
  const data = Array.from({ length: 1000 }, (_, i) => {
    return <span key={i}>Item {i + 1} </span>;
  });

  const newData = Array.from({ length: 10 }, (_, i) => {
    return <span key={i}>Item {i + 1} </span>;
  });
  const [datax, setData] = useState(newData);

  const renderItem = (item) => {
    return <div key={timeBasedUUID()}>{item}</div>;
  };
  const [spinner, setSpinner] = useState(false);
  const fetchData = () => {
    setSpinner(true);
    setTimeout(() => {
      if (i <= 3) setData((prev) => [...prev, ...newData]);
      i++;
      setSpinner(false);
    }, 2000);
  };
  const handleImagesSelected = (e) => {
    console.error(e);
  };

  const [pop, setPop] = useState(false);
  const ref1 = useRef();
  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',
      email: 'john@example.com',
      age: 30,
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    // Add more data here...
  ]);

  // Sample data
  const sampleData2 = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    // Add more data here...
  ];

  // Define columns for the table
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'age', header: 'Age' },
    // Add more columns here...
  ];

  // Function to simulate fetching more data
  const fetchMoreData = () => {
    // Simulate an API call or data fetching logic here
    // For this example, we'll just add more sample data
    const newData = [
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
      {
        id: 4,
        name: 'Bob Wilsonsadasd asdasdasdasdsadad asdsadasdsasdad',
        email: 'bob@example.com',
        age: 35,
      },
      // Add more data here...
    ];

    setSampleData((current) => [...current, ...sampleData2, ...newData]);
  };

  const builderRef = useRef();
  return (
    <ThemeProvider theme={{ primaryTextColor: 'white' }}>
      <div className="App">
        <button
          ref={ref1}
          style={{ width: '100%', marginTop: 100 }}
          onClick={(e) => {
            setPop(true);
            alert(JSON.stringify(builderRef.current.getData));
          }}
        >
          asdad
        </button>
        <ReactCrud
          url={'http://localhost:8888/project-name/public/api/posts'}
          token="iq4k86np9bVfD4xBM6i2XAeqGlg59XMmIQt32APElGKJQOAnNjy09wKSwP5f"
        />
        <FormBuilder
          ref={builderRef}
          data={[
            {
              item: 6,
              type: 'Input',
              value: 'aaa',
              name: 'a',
              bordered: true,
            },
            {
              item: 6,
              type: 'Input',
              name: 'b',
              value: 'bbb',
            },
          ]}
        />
        <InfiniteTable
          data={sampleData}
          columns={columns}
          fetchData={fetchMoreData}
        />
        <Popover
          open={pop}
          setOpen={setPop}
          targetRef={ref1}
          position="top-left"
          delayClose={2000}
        >
          Osman Aşar
        </Popover>

        <TextArea rows={5} value={pass} onChange={setPass} rounded />
        <UploadImage value={[]} onChange={handleImagesSelected} />

        <InfiniteScroll
          fetchData={fetchData}
          data={datax}
          renderItem={renderItem}
          itemHeight={60}
          containerHeight={400}
          spinner={spinner}
          virtualized={true}
        />

        {checked && <Spinner text="Yükleniyor" type="spot" size="3rem" />}
        <VirtualList data={data} itemHeight={40} containerHeight={400} />
        <Dialog open={false} title="sasas" actions={<Button label="Tamam" />}>
          sadsadasdsad dasasdasdsadasdasdsad aasdasdasdasdasd sadsadasdsad
          dasasdasdsadasdasdsad aasdasdasdasdasdsadsadasdsad
          dasasdasdsadasdasdsad aasdasdasdasdasdsadsadasdsad
          dasasdasdsadasdasdsad aasdasdasdasdasdsadsadasdsad
          dasasdasdsadasdasdsad aasdasdasdasdasd
        </Dialog>
        <Icon size="2rem">
          <AddSvg />
        </Icon>
        <Modal open={false} style={{ height: 400 }} heading={'Deneme'}>
          <Editor value={pass ?? ''} onChange={setPass} />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item={6} mbt>
              <Calendar
                disabledRangeList={[]}
                onChange={(e) => {
                  showAlert({
                    message: 'Osman' + e,
                    type: 'warning',
                    delay: 1000,
                    position: 'top-right',
                  });
                }}
              />
              <Switch checked={checked} onChange={setChecked} />
              <Switch checked={checked} onChange={setChecked} type="round" />
            </Grid>
            <Grid item={6}>
              <DateTime value={date} onChange={setDate} label="DateTime" />
            </Grid>
            <Grid item={12}>
              <Checkbox
                value={checked}
                label="Osman"
                onChange={(e) => setChecked(e.target.checked)}
                type="error"
              />
            </Grid>
            <Grid item={6} mbt>
              <Dropdown
                label="Dropdown Başlık"
                data={['a', 'b']}
                value={d}
                onSelect={setD}
                noShadow
                bordered
              />
            </Grid>
            <Grid item={6} mbt>
              <Input
                type="text"
                label="Kullanıcı Adı"
                inputSize={50}
                value={user ?? ''}
                onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            <Grid item={6} mbt>
              <Input
                type="text"
                label="Şifre"
                inputSize={50}
                value={pass ?? ''}
                onChange={(e) => setPass(e.target.value)}
              />
            </Grid>
            <Grid item={12}>
              <Button size="md" onClick={() => alert('ok')} label="Giris" />
            </Grid>
          </Grid>
        </Modal>
        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          <Grid item={1}>
            <Button
              label={'Osman'}
              size={'sm'}
              disabled={false}
              type={type}
              onClick={() =>
                setType(type === 'primary' ? 'secondary' : 'primary')
              }
            ></Button>
          </Grid>
          <Grid item={2}>
            <Button
              label={'Osman'}
              size={'md'}
              disabled={false}
              type={type}
              onClick={() =>
                setType(type === 'primary' ? 'secondary' : 'primary')
              }
            ></Button>
          </Grid>
          <Grid item={9}>
            <Button
              label={'Osman'}
              size={'lg'}
              disabled={false}
              type={type}
              onClick={() =>
                setType(type === 'primary' ? 'secondary' : 'primary')
              }
            ></Button>
          </Grid>
          <Grid item={8}>
            <Input
              label="Girişs"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              inputSize={20}
            />
          </Grid>
        </Grid>

        <AddSvg />
      </div>
    </ThemeProvider>
  );
};

export default App;
