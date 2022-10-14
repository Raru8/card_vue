<template>
    <h1>Home</h1>
    {{this.data}}
</template>

<script>
import { stores } from '@/store'

export default {
    name: "UserHome",
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
