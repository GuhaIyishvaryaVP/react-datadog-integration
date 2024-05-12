import React, { useEffect, useState } from "react";
import { client, v1 } from "@datadog/datadog-api-client";
import { configuration } from "../components/Configuration";

export default function Metrics() {
  const [listOfMetrics, setListOfMetrics] = useState("");

  const apiInstance = new v1.MetricsApi(configuration);

  useEffect(() => {
    getAllMetrics();
  }, []);

  async function getAllMetrics() {
    try {
      const data = await apiInstance.listMetrics();
      setListOfMetrics(data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <table className="table border rounded mx-auto" style={{ maxWidth: "50%" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {listOfMetrics &&
            listOfMetrics.map((metrics, index) => {
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{metrics?.type}</td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
}
