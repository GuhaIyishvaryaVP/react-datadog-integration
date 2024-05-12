import React, { useState, useEffect } from "react";
import axios from "axios";

const WebhookEvents = () => {
  const [events, setEvents] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5173");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching webhook events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <table
        className="table border rounded mx-auto"
        style={{ maxWidth: "70%" }}
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">URL</th>
            <th scope="col">Payload</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{events ? events?.name : ""}</th>
            <td>{events ? events?.url : ""}</td>
            <td>{events ? events?.payload : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WebhookEvents;
