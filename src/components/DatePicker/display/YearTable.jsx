import React, { ReactElement } from 'react';
import PropTypes from '../../../base/prop-types';
import { chunk } from 'lodash';
import { parseDate } from '../utils';
import BaseComponent from '../../../base/BaseComponent';
import { YEAR_TABLE_COL_COUNT, YEAR_TABLE_ROW_COUNT } from '../constants';

const noop = () => {};

export default class YearTable extends BaseComponent {

    static propTypes = {
        date: PropTypes.instanceOf(Date),
        disabledDate: PropTypes.func,
        onPick: PropTypes.func
    }

    static defaultProps = {
        date: new Date(),
        onPick: noop
    }
    
    getYearRange(year: Number): Number[]{
        const startYear = Math.floor(year / 10) * 10 - 1;
        const range = [];
        const len = YEAR_TABLE_COL_COUNT * YEAR_TABLE_ROW_COUNT;
        for(let i = 0; i < len; i++){
            range.push(startYear + i);
        }     
        return range;
    }

    getTable(): Object[][]{
        const { date, disabledDate } = this.props;
        const curYear = new Date().getFullYear();
        const yearRange = this.getYearRange(date.getFullYear());
        return chunk(yearRange.map((year, idx) => {
            return {
                value: year,
                disabled: typeof disabledDate === 'function' && disabledDate(new Date(date)),
                selected: date.getFullYear() === year,
                isCurrent: curYear === year,
                isPast: idx === 0,
                isFuture: idx === yearRange.length - 1
            };
        }), YEAR_TABLE_COL_COUNT);
    }

    render(){
        const { onPick } = this.props;
        const yearTable = this.getTable();
        return (
            <table className="cmr-datepicker-table cmr-datepicker-table-year">
                <tbody className="cmr-datepicker-table-body">
                    {yearTable.map((row, rowIndex) => {
                        const cells = row.map((cell, cellIndex) => {
                            const { value, selected, disabled, isFuture, isPast, isCurrent } = cell;
                            return (
                                <td className={this.classNames({
                                    'cmr-datepicker-table-cell': true,
                                    'cmr-datepicker-table-cell-selected': selected,
                                    'cmr-datepicker-table-cell-current': isCurrent,
                                    'cmr-datepicker-table-cell-past': isPast,
                                    'cmr-datepicker-table-cell-future': isFuture
                                })} key={`cell-${cellIndex}`} onClick={() => onPick(value)}>
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