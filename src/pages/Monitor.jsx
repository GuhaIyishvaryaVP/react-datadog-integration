import React, { useEffect, useState } from "react";
import CreateFrom from "../components/CreateFrom";
import { v1 } from "@datadog/datadog-api-client";
import { configuration } from "../components/Configuration";

export default function Monitor() {
  const [show, setShow] = useState(false);
  const [listOfMonitors, setListOfMonitors] = useState("");

  const apiInstance = new v1.MonitorsApi(configuration);

  useEffect(() => {
    getAllMonitors();
  }, []);

  async function getAllMonitors() {
    try {
      const data = await apiInstance.listMonitors();
      setListOfMonitors(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function createMonitor(value) {
    try {
      const createdMonitor = await apiInstance.createMonitor({ body: value });
      console.log(createdMonitor);
      getAllMonitors();
    } catch (error) {
      console.error("Error creating monitor:", error);
    }
  }

  return (
    <div>
      <table className="table border rounded">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Message</th>
            <th scope="col">Name</th>
            <th scope="col">Query</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {listOfMonitors &&
            listOfMonitors.map((monitor, index) => {
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{monitor?.message}</td>
                <td>{monitor?.name}</td>
                <td>{monitor?.type}</td>
                <td>{monitor?.query}</td>
              </tr>;
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Create New Monitor
        </button>
        <CreateFrom
          openPopForm={show}
          setOpenPopFormState={(value) => setShow(value)}
          getFormData={createMonitor}
        />
      </div>
    </div>
  );
}
