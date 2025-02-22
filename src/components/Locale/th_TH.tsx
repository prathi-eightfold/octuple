/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../LocaleProvider';
import DatePicker from '../DateTimePicker/DatePicker/Locale/th_TH';
import Dialog from '../Dialog/BaseDialog/Locale/th_TH';
import InfoBar from '../InfoBar/Locale/th_TH';
import Pagination from '../Pagination/Locale/th_TH';
import Panel from '../Panel/Locale/th_TH';
import Stepper from '../Stepper/Locale/th_TH';
import Table from '../Table/Locale/th_TH';
import TimePicker from '../DateTimePicker/TimePicker/Locale/th_TH';
import Upload from '../Upload/Locale/th_TH';

const typeTemplate = '${label} ไม่ใช่ ${type} ที่ถูกต้อง';

const localeValues: Locale = {
  locale: 'th',
  global: {
    placeholder: 'กรุณาเลือก',
  },
  DatePicker,
  Dialog,
  Form: {
    optional: '(ไม่จำเป็น)',
    defaultValidateMessages: {
      default: 'ฟิลด์ ${label} ไม่ผ่านเงื่อนไขการตรวจสอบ',
      required: 'กรุณากรอก ${label}',
      enum: '${label} ต้องเป็นค่าใดค่าหนึ่งใน [${enum}]',
      whitespace: '${label} ไม่สามารถเป็นช่องว่างได้',
      date: {
        format: 'รูปแบบวันที่ ${label} ไม่ถูกต้อง',
        parse: '${label} ไม่สามารถแปลงเป็นวันที่ได้',
        invalid: '${label} เป็นวันที่ที่ไม่ถูกต้อง',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} ต้องมี ${len} ตัวอักษร',
        min: '${label} ต้องมีอย่างน้อย ${min} ตัวอักษร',
        max: '${label} มีได้สูงสุด ${max} ตัวอักษร',
        range: '${label} ต้องมี ${min}-${max} ตัวอักษร',
      },
      number: {
        len: '${label} ต้องมี ${len} ตัว',
        min: 'ค่าต่ำสุด ${label} คือ ${min}',
        max: 'ค่าสูงสุด ${label} คือ ${max}',
        range: '${label} ต้องมีค่า ${min}-${max}',
      },
      array: {
        len: 'ต้องมี ${len} ${label}',
        min: 'ต้องมีอย่างน้อย ${min} ${label}',
        max: 'มีได้สูงสุด ${max} ${label}',
        range: 'จำนวน ${label} ต้องอยู่ในช่วง ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} ไม่ตรงกับรูปแบบ ${pattern}',
      },
    },
  },
  InfoBar,
  Pagination,
  Panel,
  Stepper,
  Table,
  TimePicker,
  Upload,
};

export default localeValues;
