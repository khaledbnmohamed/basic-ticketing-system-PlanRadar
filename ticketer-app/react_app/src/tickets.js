
import axios from "axios";
import * as config from "./config";


export const createTicket = async (formDetails, pathParams) => {
  const url = config.getApiUrl({ endpoint: "create_ticket", pathParams });

  const response = await axios.post(url, formDetails)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};

  export const editTicket = async (formDetails, pathParams) => {
    const url = config.getApiUrl({ endpoint: "edit_ticket", pathParams });

    const response = await axios.put(url, formDetails)
      .then((res) => ({ data: res.data }))
      .catch((error) => ({ data: error, hasError: true }));
    return response;
  };

export const listTickets = async (pathParams) => {
  const url = config.getApiUrl({ endpoint: "list_tickets", pathParams });


  const response = await axios.get(url)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};



export const getTicket = async (pathParams) => {
  const url = config.getApiUrl({ endpoint: "get_ticket", pathParams });


  const response = await axios.get(url)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};
