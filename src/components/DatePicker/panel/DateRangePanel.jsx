import React, { SyntheticEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../../base/BaseComponent';
import DateTable from '../display/DateTable';
import MonthTable from '../display/MonthTable';
import YearTable from '../display/YearTable';
import Icon from '../../Icon';
import { parseDate, prevDate, nextDate } from '../utils';
import { MODE_DATE, MODE_YEAR, MODE_MONTH, YEAR_TABLE_COL_COUNT, YEAR_TABLE_ROW_COUNT } from '../constants';

const noop = () => {};

export default class DateRangePanel extends BaseComponent {

    static propTypes = {
        onPick: PropTypes.func,
        minDate: PropTypes.instanceOf(Date),
        maxDate: PropTypes.instanceOf(Date),
        startDate: PropTypes.instanceOf(Date),
        endDate: PropTypes.instanceOf(Date),
        locale: PropTypes.object,
        disabledDate: PropTypes.func
    }

    static defaultProps = {
        onPick: noop,      
    }

    constructor(props: Object) {
        super(props);
        const ndate = new Date();
        this.state = {
            date: ndate,
            hoverDate: null,
            minDate: new Date(ndate),
            maxDate: nextDate(ndate),
            startDate: new Date(ndate),
            endDate: nextDate(ndate),
            views: [ MODE_DATE, MODE_DATE ],
        };
        this.handlePick = this.handlePick.bind(this);
        this.handleYearPick = this.handleYearPick.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    changeView(view: String, viewIndex: 0 | 1) {
        this.setState(prevState => {
            let views = prevState['views'];
            views = views.map((v, i) => {
                if(i === viewIndex) {
                    return view;
                }
                return v;
            });
            return {
                views
            };
        });
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

    handlePick(range: Date[], isFinished: Boolean){
        const onPick = this.props.onPick;
        const [ minDate, maxDate ] = range;
        this.setState(prevState => ({
            minDate,
            maxDate,
            hoverDate: !isFinished ? null : prevState.hoverDate,            
            selecting: !isFinished
        }), () => onPick(range, isFinished));
    }

    handleMonthPick(month: Number, viewIndex: 0| 1){
        this.setState(prevState => {
            let views = prevState.views;
            const key = !viewIndex ? 'startDate' : 'endDate';
            const { year, date } = parseDate(prevState[key]);
            const ndate = new Date(year, month, date);
            views = [].concat(views);
            views[viewIndex] = MODE_DATE;
            return {
                views,
                [key]: ndate,
            };
        });
    }

    handleYearPick(year: Number, viewIndex: 0 | 1){
        this.setState(prevState => {
            let views = prevState.views;
            const key = !viewIndex ? 'startDate' : 'endDate';
            const { month, date } = parseDate(prevState[key]);
            const ndate = new Date(year, month, date);
            views = [].concat(views);
            views[viewIndex] = MODE_DATE;
            ndate.setFullYear(year);
            return {
                views,
                [key]: ndate,
            };
        });
    }

    handleRangeChange(ndate: Date){
        this.setState({
            hoverDate: ndate
        });
    }

    handlePrevYear(isFirst: Boolean){
        this.setState(prevState => {
            const target = isFirst ? prevState.startDate : prevState.endDate;
            const ndate = new Date(target);
            ndate.setFullYear(ndate.getFullYear() - 1); 
            return {
                [isFirst ? 'startDate' : 'endDate']: ndate
            };
        });
    }

    handlePrevMonth(isFirst: Boolean) {
        this.setState(prevState => {
            const target = isFirst ? prevState.startDate : prevState.endDate;
            const ndate = prevDate(target);
            return {
                [isFirst ? 'startDate' : 'endDate']: ndate
            };
        });
    }

    handleNextYear(isFirst: Boolean){
        this.setState(prevState => {
            const target = isFirst ? prevState.startDate : prevState.endDate;
            const ndate = new Date(target);
            ndate.setFullYear(ndate.getFullYear() + 1); 
            return {
                [isFirst ? 'startDate' : 'endDate']: ndate
            };
        });
    }

    handleNextMonth(isFirst: Boolean){
        this.setState(prevState => {
            const target = isFirst ? prevState.startDate : prevState.endDate;
            const ndate = nextDate(target);
            return {
                [isFirst ? 'startDate' : 'endDate']: ndate
            };
        });
    }

    render(){
        const { date, minDate, maxDate, startDate, endDate, hoverDate, selecting, views } = this.state;
        const { disabledDate, locale } = this.props;
        const { year: startYear, month: startMonth } = parseDate(startDate);
        const { year: endYear, month: endMonth } = parseDate(endDate);
        const nextDate = this.nextDate;
        const { year: sYear, month:sMonth } = parseDate(startDate);
        const { year: eYear, month:eMonth } = parseDate(endDate);
        const showMonthBtn = sYear < eYear || (sYear === eYear && sMonth + 1 < eMonth);
        const showYearBtn = sYear < eYear;  
        return (
            <div className="cmr-datepicker-panel cmr-datepicker-panel-range">
                <div className="cmr-datepicker-panel-header-group">
                    {views.map((view, viewIndex) => {
                        const yearRange = this.getYearRange(!viewIndex ? sYear : eYear);
                        if(view === MODE_DATE){
                            return (
                                <div key={`date-control-${viewIndex}`} className="cmr-datepicker-panel-header">
                                    <span className="cmr-datepicker-panel-prev-year" onClick={() => this.handlePrevYear(true)}><Icon type="double-arrow-left"/></span>
                                    <span className="cmr-datepicker-panel-prev-month" onClick={() => this.handlePrevMonth(true)}><Icon type="arrow-left"/></span>
                                    <span className="cmr-datepicker-panel-year" onClick={() => this.changeView(MODE_YEAR, 0)}>{!viewIndex ? sYear : eYear}</span>
                                    <span className="cmr-datepicker-panel-month" onClick={() => this.changeView(MODE_MONTH, 0)} >{(!viewIndex ? sMonth : eMonth) + 1}</span>
                                    <span className="cmr-datepicker-panel-next-month" onClick={() => this.handleNextMonth(true)}><Icon type="arrow-right" /></span> 
                                    <span className="cmr-datepicker-panel-next-year" onClick={() => this.handleNextYear(true)}><Icon type="double-arrow-right"/></span>
                                </div>
                            );
                        }else if(view === MODE_MONTH){
                            return (
                                <div key={`month-control-${viewIndex}`} className="cmr-datepicker-panel-header">
                                    {showYearBtn && !!viewIndex ? <span className="cmr-datepicker-panel-prev-year" onClick={() => this.handlePrevYear(true)}><Icon type="double-arrow-left"/></span> : null}
                                    <span className="cmr-datepicker-panel-year" onClick={() => this.changeView(MODE_YEAR, 0)}>{!viewIndex ? sYear : eYear}</span>
                                    <span className="cmr-datepicker-panel-month" onClick={() => this.changeView(MODE_MONTH, 0)} >{(!viewIndex ? sYear : eYear) + 1}</span>
                                    {showYearBtn && !viewIndex ? <span className="cmr-datepicker-panel-next-year" onClick={() => this.handleNextYear(true)}><Icon type="double-arrow-right"/></span> : null}
                                </div>
                            );
                        }else if(view === MODE_YEAR){
                            return (
                                <div key={`year-control-${viewIndex}`} className="cmr-datepicker-panel-header">
                                    {showYearBtn && !!viewIndex ? <span className="cmr-datepicker-panel-prev-year" onClick={() => this.handlePrevYear(true)}><Icon type="double-arrow-left"/></span> : null}
                                    <span className="cmr-datepicker-panel-year" key="year-1">{yearRange[0] + 1}</span>
                                    <span className="cmr-datepicker-panel-year" key="year-2">{yearRange[yearRange.length - 2]}</span>                                        
                                    {showYearBtn && !viewIndex ? <span className="cmr-datepicker-panel-next-year" onClick={() => this.handleNextYear(true)}><Icon type="double-arrow-right"/></span> : null}
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="cmr-datepicker-panel-body">
                    {views.map((view, index) => {
                        if(view === MODE_DATE){
                            return (
                                <DateTable 
                                    key={`panel-${index}`}
                                    range={true} 
                                    date={!index ? startDate : endDate}
                                    locale={locale}
                                    hoverDate={hoverDate}
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    onPick={this.handlePick}
                                    selecting={selecting}
                                    onRangeChange={this.handleRangeChange}
                                />
                            );
                        }else if(view === MODE_MONTH){
                            return (
                                <MonthTable 
                                    key={`panel-${index}`}
                                    date={!index ? startDate : endDate}
                                    locale={locale}
                                    onPick={month => this.handleMonthPick(month, index)}
                                    disabledDate={disabledDate}
                                />
                            );
                        }else if(view === MODE_YEAR){
                            return (
                                <YearTable
                                    key={`panel-${index}`}
                                    date={!index ? startDate : endDate}
                                    onPick={year => this.handleYearPick(year, index)}
                                    disabledDate={disabledDate}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        );
    }

}
