<template>
    <div class="h-60 w-96 flex flex-col justify-between bg-linear-card rounded-lg m-0 m-auto">
        <div class="flex w-full justify-between items-center text-[#292D32] px-5 pt-4">
            <img src="@/assets/images/mastercard.png">
            <i class="fa-solid fa-wifi rotate-90"></i>
        </div>

        <div class="ml-5 mb-4 text-[20px]">
            <p class="font-extralight mb-4">5533 2255 5250 5487</p>
            <p>Victor Gabriel G Santos</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreditCard'
}
</script>

<style scoped>
.bg-linear-card {
    background: linear-gradient(108.51deg, #051937 1.52%, #003E63 25.79%, #006887 50.06%, #00939E 74.34%, #00BFA6 98.61%);
}
</style>