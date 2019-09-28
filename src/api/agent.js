import superagent from 'superagent';

const API_ROOT = 'https://api.github.com';
const responseBody = res => res.body;

const requests = {
  get: (url, body) =>
    superagent.get(`${API_ROOT}${url}`).query(body).then(responseBody)
};

export const ApiCalls = {
  getRepos: (username, queryOpt) =>
    requests.get(`/users/${username}/repos`, queryOpt),
  getOrgs: (username, queryOpt) =>
    requests.get(`/users/${username}/orgs`, queryOpt)
};