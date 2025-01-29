import request from "../utils/request";

const get_memory_usage = async () => request.get('/memory/');

export default get_memory_usage;