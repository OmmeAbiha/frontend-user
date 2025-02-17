import axios from 'axios';
import Cookies from 'js-cookie'

export const createApiInstance = () => axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 20000,
    headers: {
        "Accept": "application/json",
    },
});

export const attachToken = (instance) => {
    const token = Cookies.get('TOKEN');
    if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return instance;
};