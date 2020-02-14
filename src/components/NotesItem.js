import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { GoPin } from "react-icons/go";

const NotesItem = ({ note, handleEdit, handleDelete }) => {
  const { id, subject, content } = note;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-header">
          <h3 className="text-danger">
            {subject}
            <span className="float-right">
              <GoPin className="pin" />
            </span>
          </h3>
        </div>
        <div className="card-body">
          <p className="card-text text-warning">{content}</p>
        </div>
        <div className="card-footer">
          <div className="float-right">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleEdit(id)}
            >
              <MdEdit />
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => handleDelete(id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
