import classnames from 'classnames';
import * as React from 'react';

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

const DateX = ({ className, dateString, ...props }: { className?: string; dateString: string }) => {
  const d = new Date(dateString);

  return (
    <time dateTime={d.getTime().toString()} className={classnames(className)} {...props}>
      {indexedMonths[d.getMonth()]} {d.getDate()}
      {', '}
      {d.getFullYear()}
    </time>
  );
};

export default DateX;
