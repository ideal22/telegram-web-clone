import { z } from 'zod';

export const authValidationSchemas = {
  emailSchema: z.object({
    email: z.string().email(),
  }),
  otpSchema: z.object({
    otp: z
      .string()
      .min(6, { message: 'Your one-time password must be 6 characters.' }),
    email: z.string().email(),
  }),
};
