import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  firm: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  details: z.string().min(10, { message: 'Please provide at least 10 characters of details.' }).max(500, {message: 'Details cannot exceed 500 characters.'}),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
