import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { TourFormData } from '../../schema/booking-schema';

type InputType = 'text' | 'email' | 'password' | 'number' | 'date' | 'checkbox';

type InputProps = {
  name: keyof TourFormData;
  label?: string;
  type?: InputType;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
  register: UseFormRegister<TourFormData>;
};

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required,
  register,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name, type === 'number' ? { valueAsNumber: true } : {})} //to have a true number
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange ?? (() => {})} //optional safely
        placeholder={placeholder}
        required={required}
        className="rounded-md border border-gray-300 p-2"
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;
