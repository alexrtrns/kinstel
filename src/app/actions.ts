'use server';

import { type InquiryFormValues } from '@/app/inquiry-schema';

export async function submitInquiryAction(data: InquiryFormValues) {
  try {
    // Here you would typically send an email, save to a database, etc.
    console.log('New Inquiry:', data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Thank you for your inquiry! We will get back to you shortly.' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}
