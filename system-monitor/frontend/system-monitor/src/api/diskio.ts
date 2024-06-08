import request from "../utils/request";

const get_diskio_usage = async () => request.get('/diskio/');

export default get_diskio_usage;