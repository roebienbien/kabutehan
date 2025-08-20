import { z } from 'zod';

type TourField = {
  name: keyof TourFormData;
  label: string;
  type: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
};

export const tourFields: TourField[] = [
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    placeholder: 'Enter your last name',
  },
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Enter your first name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
];

export const tourSchema = z.object({
  lastName: z.string().min(1, 'last name is required'),
  firstName: z.string().min(1, 'first name is required'),
  email: z.email('invalid email address'),
});

export type TourFormData = z.infer<typeof tourSchema>;
