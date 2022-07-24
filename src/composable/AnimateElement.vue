<script>
export default function(element,animation,prefix='animate__'){
    return new Promise((resolve)=>{
        console.log('Worked')
        const animationName = `${prefix}${animation}`
        const animatedElement = document.querySelector(`.${element}`)
        animatedElement.classList.remove(`animate__animated ${animationName}`)
        function handleAnimEnd(e){
            e.stopPropagation()
            animatedElement.classList.add(`animate__animated ${animationName}`)
            resolve()
        }
        animatedElement.addEventListener('animationend',()=>{
            handleAnimEnd(),{once:true}
        })
    })
}
</script>