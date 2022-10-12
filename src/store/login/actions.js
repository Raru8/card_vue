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
}

export default { ...actions }
