<template>
    <nav-menu :photo='this.data.photo' />
    <div class="h-screen width-calc float-right flex items-end">
        <div class="h-[650px] w-[500px] bg-linear rounded-lg mb-16 ml-16 text-white shadow-xl">
            <h1 class="text-[30px] m-5">Contas e Cartões</h1>
            <credit-card />
            <div class="line"></div>
        </div>

        <div
            class="h-[650px] w-[500px] flex flex-col items-center justify-around relative bg-linear-two rounded-lg mb-16 ml-16 text-black shadow-2xl">
            <h1 class="text-[30px] left-0 top-0 m-5 absolute">Transações</h1>

            <div class="h-40 w-96 rounded-lg bg-white shadow-2xl flex items-center px-5 relative">
                <img src="@/assets/images/ifood-icon.png" class="h-[50px] w-[50px] object-cover">
                <div class="pl-4">
                    <p class="font-semibold text-xl">Ifood</p>
                    <p class="text-[#555555] text-base">10 Set 2022 ás 15:55</p>
                </div>
                <p class="font-semibold text-xl ml-24 absolute right-0 pr-4">$ 20</p>
            </div>

        </div>

    </div>
</template>

<script>
import { stores } from '@/store'
import NavMenu from '@/components/nav/NavMenu'
import CreditCard from '@/components/card/CreditCard'

export default {
    name: "UserHome",
    components: {
        NavMenu,
        CreditCard
    },

    props: {
        id: String
    },
    data() {
        return {
            data: []
        }
    },
    setup() {
        const store = stores()
        return { store }
    },
    methods: {
        loadUser(id) {
            this.store.loadUser(id).then((r) => {
                this.data = r.data
                console.log(r.data)
            })
        }

    },
    computed() {
        return this.$router.params.id
    },
    mounted() {
        this.loadUser(this.$route.params.id)
    }
}
</script>

<style scoped>
.bg-linear {
    background: linear-gradient(90deg, #000000 0%, #181818 25%, #292929 50%, #3C3C3C 75%, #4F4F4F 100%);
}

.bg-linear-two {
    background: linear-gradient(90deg, #FFFFFF 0%, #FEFCFE 25%, #FEF9FC 50%, #FEF5F8 75%, #FFF2F2 100%);
}

.width-calc {
    width: calc(100% - 80px);
}

.line {
    width: 90%;
    height: 3px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 20px;
    background: #fff;
}
</style>
