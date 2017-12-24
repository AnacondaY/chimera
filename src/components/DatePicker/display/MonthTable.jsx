import React, { ReactElement, SyntheticEvent } from 'react';
import PropTypes from '../../../base/prop-types';
import { chunk } from 'lodash';
import { parseDate } from '../utils';
import BaseComponent from '../../../base/BaseComponent';
import { MONTH_TABLE_COL_COUNT } from '../constants';

export default class MonthTable extends BaseComponent {

    static propTypes = {
        date: PropTypes.instanceOf(Date),
        locale: PropTypes.shape({
            months: PropTypes.arrayOf(PropTypes.string)
        }),
        onPick: PropTypes.func,
        disabledDate: PropTypes.func
    }

    static defaultProps = {
        date: new Date(),
        onPick(){}
    }

    getTable(): Object[][]{
        const { locale, disabledDate, date } = this.props;
        const { months } = locale;
        const ndate = new Date(date);
        const curDate = new Date();
        const { month } = parseDate(date);
        return chunk(months.map((m, i) => {
            return {
                value: m,
                disabled: typeof disabledDate === 'function' && disabledDate(ndate),
                selected: month === i,
                isCurrent: curDate.getMonth() === i,
                month: i
            };
        }), MONTH_TABLE_COL_COUNT);
    }

    render(){
        const { onPick } = this.props;
        const monthTable = this.getTable();
        return (
            <table className="cmr-datepicker-table cmr-datepicker-table-month">
                <tbody className="cmr-datepicker-table-body">
                    {monthTable.map((row, rowIndex) => {
                        const cells = row.map((cell, cellIndex) => {
                            const { disabled, selected, isCurrent, value, month } = cell;
                            return (
                                <td className={this.classNames({
                                    'cmr-datepicker-table-cell': true,
                                    'cmr-datepicker-table-cell-selected': selected,
                                    'cmr-datepicker-table-cell-current': isCurrent,
                                    'cmr-datepicker-table-cell-disabled': disabled
                                })} onClick={()=> onPick(month)} key={`cell-${cellIndex}`}>
                                    {value}
                                </td>
                            );
                        });
                        return <tr key={`row-${rowIndex}`}>{cells}</tr>;
                    })}
                </tbody>
            </table>
        );

    }    

}