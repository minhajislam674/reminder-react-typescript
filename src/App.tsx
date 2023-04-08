import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Reminder from "./models/Reminder";
import ReminderList from "./component/ReminderList";
import ReminderService from "./services/reminder";

const reminders: Reminder[] = [{ id: 1, title: "Read the book" }];

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <ReminderList reminders={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
};

export default App;
