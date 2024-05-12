import React, { Fragment, useEffect, useState } from "react";

export default function CreateFrom({
  openPopForm,
  getFormData,
  setOpenPopFormState,
}) {
  const initialState = {
    message: "",
    name: "",
    type: "",
    query: "",
  };

  const [show, setShow] = useState(openPopForm);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setShow(openPopForm);
  }, [openPopForm]);

  function closePop() {
    setShow(!show);
    setOpenPopFormState(!openPopForm);
    setFormData(initialState);
  }

  function handleOnChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getFormData(formData);
    setShow(!show);
    setOpenPopFormState(!openPopForm);
    setFormData(initialState);
  }

  return (
    <Fragment>
      {show && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={show ? { display: "block" } : {}}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create New Monitor
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closePop}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-2">
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="type" className="form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="query" className="form-label">
                    Query
                  </label>
                  <textarea
                    className="form-control"
                    name="query"
                    placeholder="Query"
                    value={formData.query}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closePop}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
