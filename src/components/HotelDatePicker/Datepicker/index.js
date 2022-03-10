import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calender';
import { getDateISO } from '../Calender/calendar';
import { DatePickerContainer, DatePickerFormGroup, DatePickerInput, DatePickerDropdown, DatePickerDropdownToggle, DatePickerDropdownMenu, DatePickerDropdownMenuRight, DatePickerLabel } from './style';
import { Col, Row } from 'reactstrap';

class DatePicker extends React.Component {

  state = { date: null, date2: null, min: null, max: null, calendarOpen: false, calendarOpen2: false }

  toggleCalendar = () => this.setState({ calendarOpen: this.state.calendarOpen2 ? false : true })
  // toggleCalendar = () => this.setState({ calendarOpen: !this.state.calendarOpen })

  handleChange = evt => evt.preventDefault()
  handleChange2 = evt => evt.preventDefault()

  handleDateChange = date => {
    const { onDateChange } = this.props;
    const { date: currentDate } = this.state;
    const newDate = getDateISO(date);

    if (currentDate !== newDate) {
      this.props.onDateChange(date)
      this.setState({ date: newDate, calendarOpen: false, calendarOpen2: true }, () => {
        (typeof onDatePicked === 'function') && onDateChange(newDate);
      });
    }
  }
  handleDateChange2 = date2 => {
    const { onDateChange2 } = this.props;
    const { date2: currentDate2 } = this.state;
    const newDate2 = getDateISO(date2);

    if (currentDate2 !== newDate2) {
      this.props.onDateChange2(date2)
      this.setState({ date2: newDate2, calendarOpen: false, calendarOpen2: false }, () => {
        (typeof onDatePicked === 'function') && onDateChange2(newDate2);
      });
    }
  }

  get value() {
    return this.state.date || '';
  }
  get value2() {
    return this.state.date2 || '';
  }

  get date() {
    const { date } = this.state;
    return date ? new Date(date) : null;
  }
  get date2() {
    const { date2 } = this.state;
    return date2 ? new Date(date2) : null;
  }

  get mindate() {
    const { min } = this.state;
    return min ? new Date(min) : null;
  }

  get maxdate() {
    const { max } = this.state;
    return max ? new Date(max) : null;
  }

  componentDidMount() {
    const { value: a, date, date2, min, max } = this.props;
    console.log(a)
    const minDate = getDateISO(min ? new Date(min) : null);
    const maxDate = getDateISO(max ? new Date(max) : null);
    const newDate = getDateISO(date ? new Date(date) : null);
    const newDate2 = getDateISO(date2 ? new Date(date2) : null);

    minDate && this.setState({ min: minDate });
    maxDate && this.setState({ max: maxDate });
    newDate && this.setState({ date: newDate });
    newDate2 && this.setState({ date2: newDate2 });
  }

  componentDidUpdate(prevProps) {
    const { value: date, min, max } = this.props;
    const { value: prevDate, min: prevMin, max: prevMax } = prevProps;

    const dateISO = getDateISO(new Date(date));
    const prevDateISO = getDateISO(new Date(prevDate));

    const minISO = getDateISO(new Date(min));
    const prevMinISO = getDateISO(new Date(prevMin));

    const maxISO = getDateISO(new Date(max));
    const prevMaxISO = getDateISO(new Date(prevMax));

    (minISO !== prevMinISO) && this.setState({ min: minISO });
    (maxISO !== prevMaxISO) && this.setState({ max: maxISO });
    (dateISO !== prevDateISO) && this.setState({ date: dateISO });
  }

  render() {
    const { label, label2 } = this.props;
    const { calendarOpen } = this.state;
    const { calendarOpen2 } = this.state;
    const [value, value2, placeholder] = [this.value, this.value2, 'YYYY-MM-DD'].map(v => v.replace(/-/g, ' / '));

    return (
      <DatePickerContainer>
        <Row>
          <Col md="6">
            <DatePickerFormGroup>
              <DatePickerLabel>{label || 'Enter Date'}</DatePickerLabel>
              <DatePickerInput type="text" readOnly="readonly" value={value} onChange={this.handleChange} placeholder={placeholder} />
            </DatePickerFormGroup>
          </Col>
          <Col md="6">
            <DatePickerFormGroup>
              <DatePickerLabel>{label2 || 'Enter Date'}</DatePickerLabel>
              <DatePickerInput type="text" readOnly="readonly" value={value2} onChange={this.handleChange2} placeholder={placeholder} />
            </DatePickerFormGroup>
          </Col>
        </Row>

        <DatePickerDropdown isOpen={calendarOpen || calendarOpen2} toggle={this.toggleCalendar}>
          <DatePickerDropdownToggle color="transparent" />

          <DatePickerDropdownMenu>
            {calendarOpen && <Calendar date={this.date} min={this.mindate} max={this.maxdate} onDateChanged={this.handleDateChange} />}
          </DatePickerDropdownMenu>
          <DatePickerDropdownMenuRight>
            {calendarOpen2 && <Calendar date={this.date2} min={this.date} max={this.maxdate} onDateChanged={this.handleDateChange2} />}
          </DatePickerDropdownMenuRight>

        </DatePickerDropdown>

      </DatePickerContainer>
    )
  }

}

DatePicker.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  value2: PropTypes.string,
  onDateChange: PropTypes.func,
  onDateChange2: PropTypes.func
};

export default DatePicker;