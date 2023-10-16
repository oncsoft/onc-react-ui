import React, { useState } from 'react';
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

const App = () => {
  const [type, setType] = useState('primary');
  const [value, setValue] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('<b>sadasd</b>  asssss');
  const [d, setD] = useState(undefined);
  const [checked, setChecked] = useState(true);
  const [date, setDate] = useState();
  const { showAlert } = useAlert();
  return (
    <ThemeProvider>
      <div className="App">
        <Spinner text="Yükleniyor" type="spot" size="3rem" />
        <Icon size="2rem">
          <AddSvg />
        </Icon>
        <Modal open style={{ height: 400 }} heading={'Deneme'}>
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
                    position: 'bottom-right',
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
