import React from "react";

function CreateTestForm() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <form>
          <div className="mb-3">
            <label htmlFor="testName" className="form-label fw-bold">
              Test name
            </label>
            <input
              type="text"
              className="form-control-plaintext"
              id="testName"
              value="New test"
              readOnly
              style={{
                fontSize: "24px",
                fontWeight: "600",
                paddingBottom: "0px",
                borderBottom: "1px solid #ced4da",
              }}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="testDescription"
              className="form-label"
              style={{ color: "#495057" }}
            >
              Description (optional notes visible only to you)
            </label>
            <textarea
              className="form-control"
              id="testDescription"
              rows="3"
              style={{ fontSize: "16px" }}
            ></textarea>
            <div className="form-text text-muted mt-2">
              Add test description for identification purposes. It will be
              visible <strong>to you only</strong>.
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success fw-bold"
            style={{ width: "100px" }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTestForm;
