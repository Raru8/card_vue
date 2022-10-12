import axios from "axios";
const BASE = 'http://localhost:3000/users/'

const actions = {
    loginUser(user, password) {
        axios.get(`${BASE}?first_name=${user}&password=${password}`)
            .then((r) => {
                console.log(r)
            }).catch((e) => {
                console.log(e)
            })
    },
}

export default { ...actions }
