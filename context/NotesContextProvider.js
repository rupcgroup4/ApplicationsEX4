import React, { useState, createContext } from 'react';

export const NotesContext = createContext();

const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      content: 'Content',
      category: 'Personal',
      datetime: new Date().toLocaleDateString(),
    },
  ]);

  const AddNote = (content, category) => {
    const newNote = {
      id: notes.length,
      content,
      category,
      datetime: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const RemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, AddNote, RemoveNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
