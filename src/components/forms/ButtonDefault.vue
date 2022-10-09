<template>
    <button 
        :class="size"
        class="rounded-lg border-[1px] bg-[#00DFC2] text-white border-[#00DFC2] hover:bg-white hover:text-black">
        {{title}}
    </button>
</template>

<script>
export default {
    name: 'ButtonDefault',
    props: {
        size: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    }
}
</script>