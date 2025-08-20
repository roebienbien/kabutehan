import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

export default function DatePickerField() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="relative inline-block">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM-dd-yyyy"
        placeholderText="Select a date"
        onChangeRaw={(e) => e?.preventDefault()} // disable typing
        className="cursor-pointer rounded border px-10 py-2"
      />
      <FaCalendarAlt className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
    </div>
  );
}
