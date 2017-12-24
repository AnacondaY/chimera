import React, { SyntheticEvent, ReactElement } from 'react';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import { parseDate, getFirstDayOfMonth, getDayCount, compareDate, equalDate, prevDate, nextDate } from '../utils';
import { DATE_TABLE_ROW_COUNT, DATE_TABLE_COL_COUNT } from '../constants';

export default class DateTable extends BaseComponent {
    
    static propTypes = {
        date: PropTypes.instanceOf(Date),
        value: PropTypes.instanceOf(Date),
        minDate: PropTypes.instanceOf(Date),
        maxDate: PropTypes.instanceOf(Date),
        hoverDate: PropTypes.instanceOf(Date),
        disableDate: PropTypes.func,
        locale:PropTypes.shape({
            weeks: PropTypes.arrayOf(PropTypes.string),
            today: PropTypes.string
        }),
        range: PropTypes.bool,
        selecting: PropTypes.bool,
        initial:PropTypes.bool,
        onPick: PropTypes.func,
        onRangeChange: PropTypes.func
    }

    static get defaultProps(){
        const ndate = new Date();
        return {
            range: false,
            date: ndate,
            hoverDate: null,
            value: new Date(ndate),
            selecting: false,
            initial: true,
            onPick(){},
            onRangeChange(){}
        };
    }

    constructor(props: Object){
        super(props);
        this.state = {
            dateTable: [[],[],[],[],[],[]]
        };
    }

    getFirstDayOfTable(d: Date): Date{
        const firstWeekOfMonth = getFirstDayOfMonth(d);
        const offset = firstWeekOfMonth || 7;
        const { year, month } = parseDate(d);
        const firstDateOfMonth = new Date(year, month, 1);        
        const lastMonthDayCount = getDayCount(year, month - 1);       
        if(month === 0){
            firstDateOfMonth.setMonth(11);
            firstDateOfMonth.setFullYear(year - 1);
        }else{
            firstDateOfMonth.setMonth(month - 1);
        }
        firstDateOfMonth.setDate(lastMonthDayCount - offset + 1); 
        return firstDateOfMonth;
    }

    isToday(d: Date): Boolean{
        const ndate = new Date();
        const { year, month, date } = parseDate(d);
        const { year: curYear, month: curMonth, date: curDate } = parseDate(ndate);
        return curYear === year && curMonth === month && curDate === date;
    }
    
    /**
     * 
     * 
     * @returns {Object[][]} 
     * @memberof DateTable 
     * cell of DateTable is a object like follows:
     * cell: {
     *  value: Number
     *  isPast: Boolean, the date is in last month
     *  isFuture: Boolean, the date is in next month
     *  isToday: Boolean,
     *  isStart: Boolean, first pick in range mode
     *  isEnd: Booleaen, second pick in range mode
     *  inRange: Boolean, in range of dates picked on first and second
     *  selected: Boolean,
     *  disabled: Boolean,
     *  rowIndex: Number,
     *  cellIndex: Number
     * }
     */
    getTable(): Object[][]{
        const { date, maxDate, minDate, hoverDate, disableDate } = this.props;
        const { year: curYear, month: curMonth, date: curDate } = parseDate(date);
        const dateTable = this.state.dateTable;
        const firstDate = this.getFirstDayOfTable(date);

        let rowIndex;
        let cellIndex;
        let cursor = firstDate;
        for(rowIndex = 0; rowIndex < DATE_TABLE_ROW_COUNT; rowIndex ++){
            for(cellIndex = 0; cellIndex < DATE_TABLE_COL_COUNT; cellIndex ++){
                dateTable[rowIndex][cellIndex] = {
                    value: cursor.getDate(),
                    isPast: compareDate(date, cursor),
                    isFuture: compareDate(cursor, date),
                    isToday: this.isToday(cursor),
                    isStart: equalDate(cursor, minDate),
                    isEnd: equalDate(cursor, maxDate),
                    inRange: minDate && hoverDate && cursor > minDate && cursor <= hoverDate,
                    selected: equalDate(cursor, date),
                    disabled: typeof disableDate === 'function' && disableDate(cursor),
                    rowIndex,
                    cellIndex
                };
                cursor = new Date(cursor.getTime());
                cursor.setDate(cursor.getDate() + 1);
            }
        }
        return dateTable;
    }

    handleCellClick(cell: Object){
        if(cell.disabled) return;
        let { date, range, onPick, minDate, maxDate, selecting } = this.props;
        const { year, month } = parseDate(date);
        const { isPast, isFuture, value } = cell;
        const newDate = new Date(year, month, value);
        if(isPast){
            newDate.setMonth(month - 1);
        }
        if(isFuture){
            newDate.setMonth(month + 1);
        }
        if(range){
            if(selecting){
                onPick([ minDate, newDate ], true);
            }else{
                onPick([ newDate, maxDate ], false);
            }
        }else{
            onPick(newDate);
        }
    }

    renderTableHeader(): ReactElement{
        const { weeks } = this.props.locale;
        return (
            <thead className="cmr-datepicker-table-header">
                <tr>
                    {weeks.map((week, index) => {
                        return <th key={`head-${index}`}>{week}</th>;
                    })}
                </tr>
            </thead>
        );
    }

    handleMouseMove(cell: Object){
        const {value, isPast, isFuture} = cell;
        const { selecting, date, onRangeChange } = this.props;
        if(!selecting) return;
        let ndate = new Date(date);
        ndate.setDate(value);
        if(isPast){
            ndate = prevDate(ndate);
        }
        if(isFuture){
            ndate = nextDate(ndate);
        }
        onRangeChange(ndate);
    }

    render(): ReactElement{
        const dateTable = this.getTable();
        const initial = this.props.initial;
        const { today } = this.props.locale;
        return (
            <table cellSpacing="0" className="cmr-datepicker-table cmr-datepicker-table-date">
                {this.renderTableHeader()}
                <tbody className="cmr-datepicker-table-body">
                    {dateTable.map((row, rowIndex) => {
                        const cells = row.map((cell, cellIndex) => {
                            const { isPast, isFuture, inRange, isStart, isEnd, isToday, selected, value, disabled } = cell;
                            return (
                                <td className={this.classNames({
                                    'cmr-datepicker-table-cell': true,
                                    'cmr-datepicker-table-cell-past': isPast,
                                    'cmr-datepicker-table-cell-future': isFuture,
                                    'cmr-datepicker-table-cell-selected': selected && !isPast && !isFuture,
                                    'cmr-datepicker-table-cell-current': isToday && !inRange  && !isPast && !isFuture,
                                    'cmr-datepicker-table-cell-start': isStart && !isPast && !isFuture && !initial,
                                    'cmr-datepicker-table-cell-end': isEnd && !isPast && !isFuture && !initial,
                                    'cmr-datepicker-table-cell-inrange': !isPast && !isFuture && inRange && (!isStart || !isEnd),
                                    'cmr-datepicker-table-cell-disabled': disabled
                                })} key={`cell-${cellIndex}`} 
                                    onClick={() => this.handleCellClick(cell)}
                                    onMouseMove={() => this.handleMouseMove(cell)}
                                >
                                    <span className="cmr-datepicker-table-cell-value">
                                        {isToday ? today : value}
                                    </span>
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