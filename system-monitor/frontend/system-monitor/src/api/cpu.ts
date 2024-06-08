import request from "../utils/request";

const get_cpu_usage = async () => request.get('/cpu/');

export default get_cpu_usage;