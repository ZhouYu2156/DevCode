import request from "../utils/request";

const get_network_usage = async () => request.get('/network/');

export default get_network_usage;