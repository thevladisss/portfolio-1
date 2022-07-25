<script>
const defaultConfig= {}
export default function(data,config=defaultConfig){

    // Refreshing form
    Object.keys(data).forEach(key=>{
        if(typeof data[key] === 'string') data[key]=''
        else data[key]=null
    })
    console.log(data,'composable')
    config
    return 200
}
</script>
