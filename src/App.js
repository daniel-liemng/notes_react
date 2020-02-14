import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid";

import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";
import Alert from "./components/Alert";

// const initialNotes = [
//   { id: uuid(), subject: "Do exercises", content: "Do chapter 7, 8" },
//   { id: uuid(), subject: "Call Alex", content: "Call Alex at 111-1111" },
//   { id: uuid(), subject: "Car check-up", content: "See Jim for check up" },
//   { id: uuid(), subject: "Do exercises", content: "Do chapter 7, 8" },
//   { id: uuid(), subject: "Call Alex", content: "Call Alex at 111-1111" }
// ];

const initialNotes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

const App = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  // useEffect
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSubject = e => {
    setSubject(e.target.value);
  };

  const handleContent = e => {
    setContent(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (subject !== "" && content !== "") {
      if (edit) {
        let editNotes = notes.map(note => {
          return note.id === id ? { ...note, subject, content } : note;
        });
        setNotes(editNotes);
        setEdit(false);
        handleAlert({ show: true, type: "success", text: "Note Updated" });
      } else {
        const newItem = {
          id: uuid(),
          subject,
          content
        };
        setNotes([...notes, newItem]);
        handleAlert({ show: true, type: "success", text: "Note Added" });
      }

      setSubject("");
      setContent("");
    } else {
      handleAlert({
        show: true,
        type: "warning",
        text: "Subject and Content fields need to be filled."
      });
    }
  };

  const handleEdit = id => {
    // console.log(`Edit ${id}`);
    let editedNote = notes.find(note => note.id === id);
    let { subject, content } = editedNote;
    setSubject(subject);
    setContent(content);
    setEdit(true);
    setId(id);
  };

  const handleDelete = id => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
    handleAlert({ show: true, type: "success", text: "Note Deleted" });
  };

  const deleteAll = () => {
    setNotes([]);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-success display-3 text-center my-4">Notes</h1>
        {notes.length === 1 && (
          <h2 className="text-primary text-center mb-3">
            You have a note to check
          </h2>
        )}
        {notes.length > 1 && (
          <h2 className="text-primary text-center mb-3">
            You have {notes.length} notes to check
          </h2>
        )}
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <NotesForm
          subject={subject}
          content={content}
          edit={edit}
          id={id}
          handleSubject={handleSubject}
          handleContent={handleContent}
          handleSubmit={handleSubmit}
        />
        {notes.length > 0 ? (
          <NotesList
            notes={notes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            deleteAll={deleteAll}
          />
        ) : (
          <h2 className="text-center text-primary">
            There is no notes to show
          </h2>
        )}
      </div>
    </>
  );
};

export default App;
