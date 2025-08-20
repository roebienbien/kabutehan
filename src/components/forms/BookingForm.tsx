import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '../ui/Input';
import {
  tourFields,
  tourSchema,
  type TourFormData,
} from '../../schema/booking-schema';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TourFormData>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data: TourFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {tourFields.map((field) => (
        <Input
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          register={register}
          error={errors[field.name]}
        />
      ))}

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Book Tour
      </button>
    </form>
  );
}
