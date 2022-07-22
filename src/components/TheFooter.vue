<template>
<section class="section footer">
  <the-container class="grid grid-5-cols"> 
    <div class="footer-section footer-1">
        <img src="@/assets/img/omnifood-logo.png" alt="" class="footer-logo">
        <section class="social-icons-section">
            <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
        </section>
        <p class="copyright">
            Copyright &reg;
        </p>
   </div>
    <div class="footer-section footer-2">
        <h3 class="">Contact us</h3>
        <ul>
            <li>Virchowstrasse 1, 44263, Dortmund,Germany</li>
            <li>
                <a class="a-contact" href="tel:+4915228989144">
                +4915228989144
                </a>
            </li>
            <li>
                <a class="a-contact" href="mailto:thevladisss@gmail.com">
                    Mail us
                </a>
            </li>
        </ul>
    </div>
    <div class="footer-section footer-3"></div>
    <div class="footer-section footer-4">
        some
    </div>
    <div class="footer-section footer-5">
        some
    </div>
    <div class="footer-section footer-6">
        some
    </div>
  </the-container>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    /* list-style:disc */
}
.footer-section {
    width:100%;
    /* background-color:red; */
    padding:4rem 0
}
.footer {
    border-top:0.5px solid lightgray;
    font-size:1.4rem
}
.footer-logo {
    width:20rem;
    margin-bottom: 1.5rem;
}
.footer-1 {
    display:flex;
    flex-direction: column;
    gap:1rem
}
.social-icons-section {
    display: flex;
    gap:2rem
}
.social-icon {
    width:2rem;
    height:2rem;
    color:gray
}

.footer-section ul {
    display: flex;
    flex-direction: column;
    gap:1rem
}
.footer-section h3 {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
}
.copyright {
    /* justify-self:flex-end; */
    margin-top:4rem
}
.a-contact {
    font-weight: 400;
    text-decoration: underline;
    font-size: inherit;
}
@media (max-width:62.5em){
    .footer .grid-5-cols {
        grid-template-columns: repeat(3,1fr);
    }
}
</style>