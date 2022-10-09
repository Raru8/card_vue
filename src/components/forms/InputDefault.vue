<template>
    <div class="flex justify-evenly flex-col h-20">
        <label class="font-bold text-sm">{{label}}</label>
        <input 
        class="h-10 w-96 rounded-lg border-[1px] border-[#D9D9D9] pl-2 outline-none" 
        :type="type"
        :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'InputDefault',
    props: {
        type: String,
        placeholder: String,
        label: String
    }
}
</script>