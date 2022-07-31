<template>
    <div>
        {{info}}
    </div>
</template>

<script>
const getInfo =()=>{
    const data = 'Some information'
    return new Promise((res)=>{
        setTimeout(() => {
            res(data)
        }, 2000);
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