import { Event } from "../context/CalendarContextProvider";
import instance from "./axios";

export class EventService {
  public static async get(): Promise<Event[]> {
    const data = await instance.get("/");
    const eventArray: Event[] = data.data;
    return eventArray;
  }

  public static async updateEventById(
    id: number,
    data: Event
  ): Promise<Event> {
    const response = await instance.patch(`/${id}`, data);
    return response.data;
  }
}