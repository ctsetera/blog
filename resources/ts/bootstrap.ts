import Axios, { AxiosStatic } from "axios";

declare global {
    interface Window {
        axios: AxiosStatic;
    }
}

export default function bootstrap() {
    window.axios = Axios;

    window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}
