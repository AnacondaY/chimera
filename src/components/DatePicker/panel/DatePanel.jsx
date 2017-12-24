import React, { ReactElement } from 'react';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import Icon from '../../Icon';
import { DateTable, MonthTable, YearTable } from '../display';
import { parseDate, prevDate, nextDate } from '../utils';
import { MODE_DATE, MODE_YEAR, MODE_MONTH } from '../constants';

const noop = () => {};

export default class DatePanel extends BaseComponent {

    static propTypes = {
        mode: PropTypes.oneOf([MODE_YEAR, MODE_MONTH, MODE_DATE]),
        date: PropTypes.instanceOf(Date),
        disableDate: PropTypes.func,
        onPick: PropTypes.func
    }

    static defaultProps = {
        mode: MODE_DATE,
        date: new Date(),
        onPick: noop
    }

    constructor(props: Object){
        super(props);
        this.state = {
            currentView: props.mode,
            currentDate: props.date
        };
        this.handleDatePick = this.handleDatePick.bind(this);
        this.handleMonthPick = this.handleMonthPick.bind(this);
        this.handleYearPick = this.handleYearPick.bind(this);
        this.reset = this.reset.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.prevYear = this.prevYear.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.nextYear = this.nextYear.bind(this);
    }

    componentWillReceiveProps(nextProps: Object) {
        this.setState({
            currentDate: nextProps.date 
        });
    }
    
    prevMonth(){
        this.setState(prevState => {
            const newDate = prevDate(this.state.currentDate);
            return {
                currentDate: newDate
            };
        });
    }

    nextMonth(){
        this.setState(prevState => {
            const newDate = nextDate(this.state.currentDate);
            return {
                currentDate: newDate
            };
        });
    }

    prevYear(){
        this.setState(prevState => {
            const { year, timestamp } = parseDate(prevState.currentDate);
            const newDate = new Date(timestamp);
            newDate.setFullYear(year - 1);
            return {
                currentDate: newDate
            };
        });
    }

    nextYear(){
        this.setState(prevState => {
            const { year, timestamp } = parseDate(prevState.currentDate);
            const newDate = new Date(timestamp);
            newDate.setFullYear(year + 1);
            return {
                currentDate: newDate
            };
        });
    }

    changeView(view: String){
        this.setState({
            currentView: view
        });
    }

    reset(){
        const ndate = new Date();
        this.setState({
            currentDate: ndate
        }, () => {
            this.props.onPick(ndate, MODE_DATE);
        });
    }

    handleYearPick(year: Number){
        this.setState(prevState => {
            const newDate = new Date(prevState.currentDate.getTime());
            newDate.setFullYear(year);
            return {
                currentDate: newDate
            };
        }, () => {
            if(this.props.mode !== MODE_YEAR){
                this.changeView(MODE_MONTH);
            }else{
                this.props.onPick(this.state.currentDate, MODE_YEAR);
            }
        });
    }

    handleMonthPick(month: Number){
        this.setState(prevState => {
            const newDate = new Date(prevState.currentDate.getTime());
            newDate.setMonth(month);
            return {
                currentDate: newDate
            };
        }, () => {
            if(this.props.mode !== MODE_MONTH){
                this.changeView(MODE_DATE);
            }else{
                this.props.onPick(this.state.currentDate, MODE_MONTH);
            }
        });
    }

    handleDatePick(date: Date){
        this.setState({
            currentDate: date
        }, () => this.props.onPick(date, MODE_DATE));
    }

    renderTable(){
        const { currentView, currentDate } = this.state;
        const { value, disableDate, locale } = this.props;
        switch (currentView){
        case MODE_YEAR:
            return (
                <YearTable onPick={this.handleYearPick} value={currentDate} date={currentDate}/>
            );
        case MODE_MONTH:
            return (
                <MonthTable locale={locale} onPick={this.handleMonthPick} value={currentDate} date={currentDate} />
            );
        case MODE_DATE:
            return (
                <DateTable disableDate={disableDate} locale={locale} onPick={this.handleDatePick} value={currentDate} date={currentDate} />
            );
        }
    }

    render(){
        const { year, month, date } = parseDate(this.state.currentDate);
        return (
            <div className="cmr-datepicker-panel">
                <div className="cmr-datepicker-panel-header">
                    <span className="cmr-datepicker-panel-prev-year" onClick={this.prevYear}><Icon type="double-arrow-left"/></span>
                    <span className="cmr-datepicker-panel-prev-month" onClick={this.prevMonth}><Icon type="arrow-left"/></span>
                    <span className="cmr-datepicker-panel-year" onClick={() => this.changeView(MODE_YEAR)}>{year}</span>
                    <span className="cmr-datepicker-panel-month" onClick={() => this.changeView(MODE_MONTH)}>{month + 1}</span>
                    <span className="cmr-datepicker-panel-next-month" onClick={this.nextMonth}><Icon type="arrow-right"/></span>
                    <span className="cmr-datepicker-panel-next-year" onClick={this.nextYear}><Icon type="double-arrow-right"/></span>
                </div>
                <div className="cmr-datepicker-panel-body">
                    {this.renderTable()}
                </div>
                <div className="cmr-datepicker-panel-footer">
                    <button className="cmr-datepicker-panel-control" onClick={this.reset}>{this.props.locale.todayButton}</button>
                </div>
            </div>
        );
    }
}