import { post } from "./base/index";
import { API } from "../helpers";

export default {
  enviarEmail: (destinatario) => post(`${API}/enviar-Email/`,  destinatario),
};
