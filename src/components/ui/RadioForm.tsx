import {
  Controller,
  type Control,
  type FieldError,
  type Path,
} from 'react-hook-form';

type TOption = {
  value: string;
  label: string;
};

type Props<T extends Record<string, any>> = {
  name: Path<T>;
  control: Control<any>;
  options: TOption[];
  error?: FieldError;
  label: string;
};

export default function RadioForm<T extends Record<string, any>>({
  name,
  control,
  options,
  error,
  label,
}: Props<T>) {
  // const { control } = useForm();
  // const [selected, setSelected] = useState('button');
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-x-2">
                <input
                  type="radio"
                  value={opt.value}
                  checked={field.value === opt.value}
                  onChange={() => field.onChange(opt.value)}
                  // checked={selected === opt.value}
                  // onChange={(e) => setSelected(e.target.value)}
                  className="h-4 w-4"
                />
                {opt.label}
              </label>
            ))}
            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
}
