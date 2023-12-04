import { z } from "zod";

export const newEventSchema = z
  .object({
    eventName: z.coerce.string().min(1, { message: "Event name is required" }),
    startDate: z.coerce.date().refine((startDate) => startDate > new Date(), {
      message: "Date should not be before today",
    }),
    startTime: z.string().min(1, { message: "Start time is required" }),
    endDate: z.coerce.date(),
    endTime: z.string().min(1, { message: "End time is required" }),
    location: z.string().min(1, { message: "Location is required" }),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date cannot be earlier than start date.",
    path: ["endDate"],
  });

  export const eventDetailsSchema = z
    .object({
      eventName: z.coerce
        .string()
        .min(1, { message: "Event name is required" }),
      startDate: z.coerce.date(),
      startTime: z.string().min(1, { message: "Start time is required" }),
      endDate: z.coerce.date(),
      endTime: z.string().min(1, { message: "End time is required" }),
      location: z.string().min(1, { message: "Location is required" }),
    })
    .refine((data) => data.endDate >= data.startDate, {
      message: "End date cannot be earlier than start date.",
      path: ["endDate"],
    });