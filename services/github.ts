import axios from 'axios';

const requestGitHub = async () => {
    const endpoint = `https://api.github.com/users/otavio-sanchez/repos`;
    const { data } = await axios(endpoint);
    return data;
};

export { requestGitHub };
