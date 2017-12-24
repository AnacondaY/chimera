import Loading from './Loading';
import { inject } from '../i18n';
import zhCN from '../i18n/lang/zh-CN';

export default inject('loading', zhCN['loading'])(Loading);