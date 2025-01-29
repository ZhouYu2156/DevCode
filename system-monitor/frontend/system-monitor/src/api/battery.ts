import request from '@/utils/request';

const get_battery_information = async () => request.get('/battery/');


export default get_battery_information;