import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IServerData<T> {
    code: number;
    data: T;
    msg: string;
}

const http = axios.create({
    timeout: 5000,
    headers: {
        osType: '234234',
        sysVersion: '234',
        appPlatform: 'r24',
        storeChanel: '234',
        appVersion: '2342',
        buildVersion: '3424',
        signValue: '23424',
        uuid: '242342',
        timestamp: '23424'
    },
});

http.interceptors.response.use(
    (res: AxiosResponse<IServerData<unknown>>) => {
        const { data } = res;
        if (data.code === 200) {
            return res;
        }

        if (data.code === 100010) {
            location.href = '/login';
            return Promise.reject(data);
        }

        return Promise.reject(data);
    },
    (error) => Promise.reject(error),
);

export const HttpGet = <T>(url: string, params?: unknown) =>
    http.get<IServerData<T>>(url, { params }).then((resp) => resp.data.data);

export const HttpPost = <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    http.post<IServerData<T>>(url, data, config).then((resp) => resp.data.data);
