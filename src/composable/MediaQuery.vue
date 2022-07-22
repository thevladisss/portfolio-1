<script>
import {ref,computed, onMounted, onUnmounted} from 'vue'
export default function(){
let windowWidth = ref(window.innerWidth)
const onChangeWidth = ()=>windowWidth.value = window.innerWidth
    onMounted(()=>window.addEventListener('resize',onChangeWidth))
    onUnmounted(()=>window.removeEventListener('resize',onChangeWidth))

    const deviceType =computed(()=>{
        if(windowWidth.value>1200){
            return 'laptop'
        }
        else if(windowWidth.value<1200 && windowWidth.value > 1000){
            return 'laptop-small'
        }
        else if(windowWidth.value<1000 && windowWidth.value>750){
            return 'tablet'
        }
        else if(windowWidth.value<750 && windowWidth.value >560){
            return 'tablet-small'
        }
        else if(windowWidth.value<550){
            return 'phone'
        }
        return null
    })
    const width = computed(()=>windowWidth.value)
    return {deviceType,width}
}
</script>

