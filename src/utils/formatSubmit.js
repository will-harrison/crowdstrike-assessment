import { formatRFC3339, parse } from 'date-fns';

const formatSubmit = (values) => {
  const startTime = formatRFC3339(
    parse(values.start_time, 'HH:mm', new Date())
  );
  const endTime = formatRFC3339(parse(values.end_time, 'H:m', new Date()));
  const attendees = values.attendees.split(',');
  return { ...values, start_time: startTime, end_time: endTime, attendees };
};

export default formatSubmit;
