import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { monitorSchema } from "./Schema";

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

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: monitorSchema,
      onSubmit: (value, action) => {
        getFormData(value);
        setShow(!show);
        setOpenPopFormState(!openPopForm);
        action.resetForm();
      },
    });

  return (
    <Fragment>
      {show && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={show ? { display: "block" } : {}}
        tabIndex="-1"
        aria-hidden="true"
      >
        <form
          className="modal-dialog  modal-dialog-centered"
          onSubmit={handleSubmit}
        >
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
                    className={`form-control ${
                      errors.message && touched.message
                        ? "border border-danger"
                        : ""
                    }`}
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name && touched.name
                        ? "border border-danger"
                        : ""
                    }`}
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="type" className="form-label">
                    Type
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.type && touched.type
                        ? "border border-danger"
                        : ""
                    }`}
                    name="type"
                    placeholder="Type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="query" className="form-label">
                    Query
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.query && touched.query
                        ? "border border-danger"
                        : ""
                    }`}
                    name="query"
                    placeholder="Query"
                    value={values.query}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
        </form>
      </div>
    </Fragment>
  );
}
