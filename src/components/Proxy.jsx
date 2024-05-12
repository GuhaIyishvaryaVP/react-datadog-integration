import pako from "pako";
import bufferFrom from "buffer-from";
import axios from "axios";
import { v1, client } from "@datadog/datadog-api-client";

const proxyUrl = "http://127.0.0.1";
const proxyPort = "5173";

export class HttpLibraryWithProxy {
  debug = false;

  send = (request) => {
    const method = request.getHttpMethod().toString();
    let body = request.getBody();

    let compress = request.getHttpConfig().compress;
    if (compress === undefined) {
      compress = true;
    }

    const headers = request.getHeaders();
    if (typeof body === "string") {
      if (headers["Content-Encoding"] === "gzip") {
        body = bufferFrom(pako.gzip(body).buffer);
      } else if (headers["Content-Encoding"] === "deflate") {
        body = bufferFrom(pako.deflate(body).buffer);
      }
    }
    const axiosInstance = axios.create({
      baseURL: request.getUrl(),
      method: method,
      headers: headers,
      proxy: {
        host: proxyUrl,
        port: proxyPort,
        protocol: "http",
      },
    });
    const resultPromise = axiosInstance
      .request({
        url: request.getUrl(),
        data: body,
        responseType: "arraybuffer",
      })
      .then((resp) => {
        const headers = resp.headers;
        const body = {
          text: () => Promise.resolve(resp.data.toString()),
          binary: () => Promise.resolve(resp.data),
        };
        const response = new client.ResponseContext(resp.status, headers, body);
        return response;
      });

    return resultPromise;
  };
}
