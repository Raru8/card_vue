<template>
    <nav
        class="h-full w-20 absolute float-left border-r-2 border-[#D9D9D9] flex flex-col justify-start items-center pt-20 text-[30px]">
        <div class="h-1/2 flex flex-col justify-between items-center mb-16">

            <div class="hover:transition ease-in-out hover:drop-shadow-lg hover:text-[#00DFC2]">
                <i class="fa-solid fa-house"></i>
            </div>

            <div class="hover:transition ease-in-out hover:drop-shadow-lg hover:text-[#00DFC2]">
                <i class="fa-solid fa-dollar-sign"></i>
            </div>

            <div class="hover:transition ease-in-out hover:drop-shadow-lg hover:text-[#00DFC2]">
                <i class="fa-solid fa-receipt"></i>
            </div>

            <div class="hover:transition ease-in-out hover:drop-shadow-lg hover:text-[#00DFC2]">
                <i class="fa-solid fa-gear"></i>
            </div>

        </div>

        <img v-if="photo" :src="photo" class="rounded-full w-2/3">
        <img v-else src="@/assets/images/avatar.png" class="rounded-full w-2/3">
    </nav>
</template>

<script>

export default {
    name: 'NavMenu',
    props: {
        photo: {
            type: String,
        }
    }
}

</script>