import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, type Control, type FieldError } from 'react-hook-form';
import { FaCalendarAlt } from 'react-icons/fa';

type DatePickerFieldProps = {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export default function DatePickerField({
  control,
  name,
  error,
}: DatePickerFieldProps) {
  // const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="relative inline-block">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="MM-dd-yyyy"
            placeholderText="Select a date"
            onChangeRaw={(e) => e?.preventDefault()} // disable typing
            className="cursor-pointer rounded border px-10 py-2"
          />
        )}
      />
      <FaCalendarAlt className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
