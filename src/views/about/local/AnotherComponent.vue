<template>
    <div>
        {{info}}
    </div>
</template>

<script>
const getInfo =()=>{
    return new Promise(res=>{
        setTimeout(() => {
            res('Another information')
        }, 3000);
    })
}
    export default {
        async setup(){
            const info = await getInfo()



            return {info}
        }
    }
</script>

<style scoped>

</style>