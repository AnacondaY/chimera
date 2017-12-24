import Datepicker from './Datepicker.jsx';
import locale from '../i18n/lang/zh-CN';
import { inject } from '../i18n';
import zhCN from '../i18n/lang/zh-CN';
export default inject('datepicker', zhCN['datepicker'])(Datepicker);