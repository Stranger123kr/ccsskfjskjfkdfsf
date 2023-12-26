import React from "react";

const Updatetodo = () => {
  return (
    <>
      <>
        <button
          type="button"
          className="btn"
          style={{boxShadow:"none"}}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Update
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <input
                  className="modal-body d-flex"
                  style={{ border: "none", outline: "none" }}
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <input
                className="modal-body d-flex"
                style={{ border: "none", outline: "none" }}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Updatetodo;
