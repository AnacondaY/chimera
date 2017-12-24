import Pagination from './Pagination';
import { inject } from '../i18n';
import zhCN from '../i18n/lang/zh-CN';

export default inject('pagination', zhCN['pagination'])(Pagination);