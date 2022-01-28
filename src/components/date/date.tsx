import * as React from 'react';
import classnames from 'classnames';
import { date } from './date.module.css';

export const indexedMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateX = ({
  className,
  dateString,
  ...props
}: {
  className?: string,
  dateString: string,
}) => {
  const d = new Date(dateString);

  return (
    <time
      dateTime={d.getTime().toString()}
      className={classnames(date, className)}
      {...props}
    >
      {indexedMonths[d.getMonth()]}
      {' '}
      {d.getDate()}
      {', '}
      {d.getFullYear()}
    </time>
  );
};

export default DateX;
