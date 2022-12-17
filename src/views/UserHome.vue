<template>
    <div class="h-screen width-calc flex items-center justify-center">
        <div
            class="h-[650px] w-[500px] flex flex-col items-center justify-around relative bg-linear-two rounded-lg mb-16 ml-16  shadow-2xl">
            <credit-card :name="cartao.usuario" :inden="cartao.numero" :cvv="cartao.cvv" :data="cartao.data" />

            <div class="w-9/12 mb-7 h-50 flex justify-around flex-wrap">
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">Usuário</label>
                    <input type="text" id="small-input" v-model="cartao.usuario" maxlength="25"
                        class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  dark:border-gray-600 dark:placeholder-gray-400 ">
                </div>

                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">Numero do
                        Cartão</label>
                    <input type="text" id="small-input" maxlength="19" @keypress="maskCredit(cartao.numero)"
                        v-model="cartao.numero"
                        class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  dark:border-gray-600 dark:placeholder-gray-400 ">
                </div>
            </div>

            <div class="w-9/12 mb-7 h-50 flex justify-around flex-wrap">
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">
                        Data de Validade</label>
                    <input type="text" id="small-input" maxlength="5" @keypress="maskData(cartao.data)"
                        v-model="cartao.data"
                        class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  dark:border-gray-600 dark:placeholder-gray-400 ">
                </div>

                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">
                        CVV</label>
                    <input type="text" id="small-input" maxlength="3" @keypress="maskCredit(cartao.numero)"
                        v-model="cartao.cvv"
                        class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  dark:border-gray-600 dark:placeholder-gray-400 ">
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import CreditCard from '@/components/card/CreditCard'

export default {
    name: "UserHome",
    components: {
        CreditCard
    },

    data() {
        return {
            cartao: {
                usuario: '',
                numero: '',
                data: '',
                cvv: ''
            },

            regex: ''

        }
    },

    methods: {
        maskCredit(v) {
            v = v.replace(/\D/g, "");
            v = v.replace(/(\d{4})/g, "$1 ");
            this.cartao.numero = v
        },

        maskData(d) {
            d = d.replace(/\D/g, "");
            d = d.replace(/(\d{2})/g, "$1/")
            d = d.replace(/\/$/, "");
            this.cartao.data = d
        }
    }

}
</script>

<style scoped>
.bg-linear-two {
    background: linear-gradient(90deg, #FFFFFF 0%, #FEFCFE 25%, #FEF9FC 50%, #FEF5F8 75%, #FFF2F2 100%);
}

.width-calc {
    width: calc(100% - 80px);
}
</style>
