import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import {
  tourSchema,
  defaultTourValues,
  type TourFormData,
} from '../../schema/booking-schema';
import DatePickerField from './DatePickerField';
import RadioForm from '../ui/RadioForm';
import { useState } from 'react';
import { pricePlans } from '../../pages/homepage/PricePlan';

const options = [
  {
    value: 'button',
    label: 'button',
  },
  {
    value: 'portobello',
    label: 'portobello',
  },
  {
    value: 'shiitake',
    label: 'shiitake',
  },
];

const steps = [
  {
    id: 1,
    title: 'Personal Info',
  },
  {
    id: 2,
    title: 'Tour Details',
  },
  {
    id: 3,
    title: 'Payment Confirmation',
  },
];

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

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(pricePlans[1]);

  const onSubmit = (data: TourFormData) => {
    if (currentStep < steps.length) {
      // if (currentStep < 3) {
      nextStep();
      return;
    }
    alert(JSON.stringify(data));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="rounded border border-gray-400 p-10">
      <div className="mb-4 text-center text-4xl font-bold">
        Tour Booking Form
      </div>
      {/*Stepper*/}
      <div className="mb-8 flex items-center justify-center gap-x-14">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            {/* Circle */}
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                currentStep === step.id
                  ? 'border-primary bg-primary text-white'
                  : currentStep > step.id
                    ? 'border-secondary bg-secondary text-white'
                    : 'border-gray-300 text-gray-500'
              }`}
            >
              {step.id}
            </div>

            {/* Title */}
            <span
              className={`ml-2 text-lg font-medium ${
                currentStep >= step.id ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter' && step < 3) {
        //     e.preventDefault();
        //   }
        // }}
        className="relative h-[600px] px-10 py-4 lg:w-[1200px]"
      >
        <div className="flex-1">
          {currentStep === 1 && (
            <div className="h-[300px]">
              {/* <div className="mb-2 text-2xl font-bold">Step 1: User Info</div> */}
              <div className="grid grid-cols-3 gap-4">
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
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              {/* <div className="mb-2 text-2xl font-bold">Step 2: Tour Info</div> */}
              <div className="grid grid-cols-2 gap-x-4">
                {/* <div> */}
                {/*   <RadioForm<TourFormData> */}
                {/*     name="tourType" */}
                {/*     control={control} */}
                {/*     options={options} */}
                {/*     label="Tour type" */}
                {/*     error={errors.tourType} */}
                {/*   /> */}
                {/* </div> */}
                <div className="col-span-full grid grid-cols-3 rounded-lg border border-gray-300 shadow">
                  <div className="col-span-2 flex w-full flex-col gap-y-4 p-8">
                    <div className="text-lg font-bold">
                      Choose a pricing plan:
                    </div>
                    <div className="flex">
                      {/* <div className="flex"> */}
                      {pricePlans.map((plan, index) => (
                        <label
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan)}
                          className={`cursor-pointer border px-12 py-2 shadow transition ${selectedPlan.id === plan.id ? 'border-gray-300 bg-gray-200' : 'text-gray border-gray-300'} ${index === 0 ? 'rounded-l-lg' : ''} ${index === pricePlans.length - 1 ? 'rounded-r-lg' : ''} `}
                        >
                          <input
                            type="radio"
                            value={plan.id}
                            {...register('tourType')}
                            className="hidden"
                          />
                          {plan.title}
                        </label>
                      ))}
                    </div>
                    <div>
                      <div className="font-bold">
                        {selectedPlan.title} Tour Details:
                      </div>
                      <div className="text-gray-500">
                        {selectedPlan.description}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input<TourFormData>
                        name="guests"
                        label="Guests"
                        placeholder="Enter guest"
                        type="number"
                        register={register}
                        error={errors.guests}
                      />

                      <DatePickerField
                        control={control}
                        name="date"
                        label={'Select tour date'}
                        error={errors.date}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 border-l border-gray-300 p-8">
                    <div>
                      <div className="text-2xl font-bold">
                        {selectedPlan.title} tour
                      </div>
                      <div className="text-xl text-gray-400">
                        {selectedPlan.subtitle}
                      </div>
                    </div>
                    <div className="text-3xl font-bold">
                      ₱{selectedPlan.price}{' '}
                      <span className="text-base font-normal text-gray-400">
                        per guest
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div>Confirm Payment</div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="absolute right-0 bottom-6 left-0 flex justify-between px-10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="rounded border px-4 py-2"
            >
              Back
            </button>
          ) : (
            <div />
          )}
          {currentStep < 3 ? (
            <button
              type="submit"
              // onClick={nextStep}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="rounded bg-green-500 px-4 py-2 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
