import request from "../utils/request";

const get_disk_usage = async () => request.get('/disk/');

export default get_disk_usage;






