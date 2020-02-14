import React from "react";
import { MdForward } from "react-icons/md";

const NotesForm = ({
  subject,
  content,
  handleSubject,
  handleContent,
  handleSubmit,
  edit,
  id
}) => {
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={handleSubject}
              className="form-control"
              placeholder="Subject..."
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={handleContent}
              className="form-control"
              placeholder="Content..."
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            {edit ? "Update" : "Add"} <MdForward className="icon-size" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default NotesForm;
