import { z } from 'zod';

export const defaultTourValues: TourFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  tourType: 'button',
  guests: 1,
  date: new Date(),
};

export const tourSchema = z.object({
  firstName: z.string().min(1, 'first name is required'),
  lastName: z.string().min(1, 'last name is required'),
  middleName: z.string().min(1, 'middle name is required'),
  email: z.email('invalid email address'),
  tourType: z.enum(['button', 'shiitake', 'portobello']),
  guests: z
    .number()
    .min(1, 'At least 1 guest is required')
    .max(20, 'max is 20 guests'),
  date: z.date(),
});

export type TourFormData = z.infer<typeof tourSchema>;

// type TourField = {
//   name: keyof TourFormData;
//   label: string;
//   type: 'text' | 'email' | 'password' | 'number';
//   placeholder: string;
// };
//
// export const tourFields: TourField[] = [
//   {
//     name: 'firstName',
//     label: 'First name',
//     type: 'text',
//     placeholder: 'Enter your first name',
//   },
//   {
//     name: 'lastName',
//     label: 'Last name',
//     type: 'text',
//     placeholder: 'Enter your last name',
//   },
//   {
//     name: 'middleName',
//     label: 'Last name',
//     type: 'text',
//     placeholder: 'Enter your last name',
//   },
//   {
//     name: 'email',
//     label: 'Email',
//     type: 'email',
//     placeholder: 'Enter your email',
//   },
// ];
