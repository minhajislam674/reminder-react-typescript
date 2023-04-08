import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ reminders, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {reminders.map((reminder) => (
        <li className="list-group-item" key={reminder.id}>
          {" "}
          {reminder.title}{" "}
          <button
            onClick={() => onRemoveReminder(reminder.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </li>
      ))}{" "}
    </ul>
  );
}

export default ReminderList;
