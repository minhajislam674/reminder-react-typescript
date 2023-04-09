import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("todos");
    return response.data;
  }

  async addReminder(title: string, id: number) {
    const response = await this.http.post<Reminder[]>("todos", { title, id });
    return response.data;
  }

  async deleteReminder(id: number) {
    const response = await this.http.delete<Reminder[]>("todos/" + id);
    return response.data;
  }
}

export default new ReminderService();
