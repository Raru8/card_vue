import axios from "axios";
const BASE = 'http://localhost:3000/users/'

const actions = {
    async loginUser(user, password) {
        return axios.get(`${BASE}?first_name=${user}&password=${password}`)
            .then((r) => {
                return r
            }).catch((e) => {
                console.log(e)
            })
    },
    async loadUser(id) {
        return axios.get(`${BASE}${id}`)
            .then((r) => { return r })
            .catch((e) => { return e })
    }
}

export default { ...actions }
