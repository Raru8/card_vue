<template>
    <div class="h-full w-full flex items-center justify-center">
        <div
            class="h-full w-1/2 flex flex-col items-center justify-center bg-[#00DFC2] text-[40px] text-center text-white font-light">
            <img src="../../assets/images/bg-login.png">
            <p class="mt-2">Star for free and get <br> attractive offers</p>
        </div>
        <div class="h-full w-1/2 flex flex-col items-center justify-center relative">
            <h1 class="text-[50px] font-semibold absolute top-20 left-48">Login</h1>

            <form class="h-96 flex flex-col justify-around">
                <input-default :placeholder="'Email'" :label="'Login:'" :type="'text'" v-model="user" />
                <input-default :placeholder="'Password'" :label="'Password:'" :type="'password'" v-model="password" />

                <button-default :size="'h-10 w-96'" :title="'Login'" @click.prevent="loginUser()" />

                <span class="line-div">Or</span>

                <button
                    class="text-[#9B9B9B] text-base border-[1px] rounded-lg h-10 w-96 mt-7 hover:bg-[#00DFC2] hover:text-white">
                    <i class="fa-brands fa-google"></i>
                    Sing in with Google
                </button>

            </form>

        </div>
    </div>
</template>

<script>
import InputDefault from '@/components/forms/InputDefault';
import ButtonDefault from '@/components/forms/ButtonDefault';

import axios from 'axios';

export default {
    name: 'UserLogin',
    components: {
        InputDefault,
        ButtonDefault
    },
    data() {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
            axios.get(`http://localhost:3000/users/?first_name=${this.user}&password=${this.password}`)
                .then((r) => {
                    console.log(r)
                    alert(r.data)
                }).catch((e) => {
                    console.log(e)
                })
        },
    },
}
</script>

<style>
.line-div {
    top: 25px;
    position: relative;
    width: 24rem;
    text-align: center;
}

.line-div::after,
.line-div::before {
    content: "";
    position: absolute;
    width: 45%;
    height: 1px;
    background-color: #00DFC2;
}

.line-div::after {
    left: 0;
    top: 50%;
}

.line-div::before {
    right: 0;
    top: 50%;
}
</style>
