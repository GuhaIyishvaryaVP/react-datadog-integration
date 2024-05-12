import { object, string, number, date } from "yup";

export const monitorSchema = object({
  message: string().required(),
  name: string().required(),
  query: string().required(),
  type: string().required(),
});
