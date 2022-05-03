import axios from 'axios';

const requestNpm = async () => {
    const endpoint = `https://registry.npmjs.com/-/v1/search?text=eslint-plugin-acessibility`;
    const { data } = await axios(endpoint);
    return data;
};

export { requestNpm };
