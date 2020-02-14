import React from "react";

import NotesItem from "./NotesItem";

const NotesList = ({ notes, handleEdit, handleDelete, deleteAll }) => {
  return (
    <>
      <div className="row mb-4">
        <div className="col text-center">
          {notes.length > 0 && (
            <button className="btn btn-warning" onClick={deleteAll}>
              Delete All Notes
            </button>
          )}
        </div>
      </div>
      <div className="row">
        {notes.map(note => (
          <NotesItem
            note={note}
            key={note.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default NotesList;
