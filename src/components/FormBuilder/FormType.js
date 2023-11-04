import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import DateTime from '../DateTime/DateTime';
import Input from '../Input/Input';
import Editor from '../Editor/Editor';
import TextArea from '../TextArea/TextArea';
import Switch from '../Switch/Switch';
import ColorPicker from '../ColorPicker/ColorPicker';
import UploadImage from '../UploadImage/UploadImage';
import Dropdown from '../Dropdown/Dropdown';
const types = new Map();

types.set('Button', Button);
types.set('Input', Input);
types.set('Checkbox', Checkbox);
types.set('Dropdown', Dropdown);
types.set('DateTime', DateTime);
types.set('Editor', Editor);
types.set('TextArea', TextArea);
types.set('Switch', Switch);
types.set('ColorPicker', ColorPicker);
types.set('UploadImage', UploadImage);

export default types;
