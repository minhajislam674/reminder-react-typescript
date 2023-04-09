import React, { useState } from "react";
import Reminder from "../models/Reminder";

interface NewReminderProps {
  onAddReminder: (title: string, id: number) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps) => {
  const [title, setTitle] = useState("");

  const id = Math.floor(Math.random() * 1000) + 5000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReminder(title, id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          className="form-control"
          placeholder="add item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewReminder;
