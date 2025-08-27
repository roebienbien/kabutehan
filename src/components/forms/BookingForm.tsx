import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import {
  tourSchema,
  defaultTourValues,
  type TourFormData,
} from '../../schema/booking-schema';
import DatePickerField from './DatePickerField';
import type { To } from 'react-router-dom';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TourFormData>({
    resolver: zodResolver(tourSchema),
    defaultValues: defaultTourValues,
  });

  const onSubmit = (data: TourFormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="rounded border border-gray-400 p-10">
      <div className="text-center text-4xl font-bold">Tour Booking Form</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 space-y-4 gap-x-4 p-10"
      >
        <Input<TourFormData>
          name="firstName"
          label="First name"
          placeholder="Enter first name"
          register={register}
          error={errors.firstName}
        />
        <Input<TourFormData>
          name="lastName"
          label="Last name"
          placeholder="Enter last name"
          register={register}
          error={errors.lastName}
        />
        <Input<TourFormData>
          name="middleName"
          label="Middle name"
          placeholder="Enter middle name"
          register={register}
          error={errors.middleName}
        />
        <Input<TourFormData>
          name="email"
          label="Email"
          placeholder="Enter email address"
          register={register}
          error={errors.email}
        />
        <div className="block">
          <label htmlFor="tourType">Tour type</label>
          <select
            {...register('tourType')}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2"
          >
            <option value="button">Button</option>
            <option value="shiitake">Shiitake</option>
            <option value="portobello">Portobello</option>
          </select>
        </div>
        <Input<TourFormData>
          name="guests"
          label="Guests"
          placeholder="Enter guest"
          type="number"
          register={register}
          error={errors.guests}
        />
        <DatePickerField control={control} name="date" error={errors.date} />

        <button
          type="submit"
          className="col-span-full cursor-pointer rounded bg-blue-600 px-4 py-2 font-bold text-white active:bg-blue-500"
        >
          Book Tour
        </button>
      </form>
    </div>
  );
}
