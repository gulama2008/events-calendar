import { z } from "zod";

export const saveSchema = z.object({
  eventName: z
    .string()
    .min(1, { message: "Event name is required" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  startTime: z.string().min(1, { message: "Start time is required" }),
  endDate: z.string().min(1, { message: "End date is required" }),
  endTime: z.string().min(1, { message: "End time is required" }), 
    location: z.string().min(1, { message: "Location is required" }),
});
