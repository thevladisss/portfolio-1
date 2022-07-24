<script>
export default function(val){
    console.log('woRKS')
    if(val){
        document.body.style.overflowY = 'auto'
        document.documentElement.style.overflowY = 'auto '
        return true
    }
    else if (!val){
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
        return false
    }
}
</script>
