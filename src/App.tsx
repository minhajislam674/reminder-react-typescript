import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Reminder from "./models/Reminder";
import ReminderList from "./component/ReminderList";
import ReminderService from "./services/reminder";
import NewReminder from "./component/NewReminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const allReminders = await ReminderService.getReminders();
    setReminders(allReminders);
  };

  const removeReminder = (id: number) => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };

  const addReminder = async (title: string, id: number) => {
    const newReminder = await ReminderService.addReminder(title, id);
    setReminders([newReminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList reminders={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
};

export default App;
