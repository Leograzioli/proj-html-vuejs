<script>
export default {
    name: 'MostPopular'
}
</script>

<template>
    <section id="most-popular">
        <div class="container">
            <!-- section title -->
            <h2 class="ms_fs-3 mb-5">Our Most Popular Dishes</h2>
            <div class="row">

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img src="../assets/skin-on-fries-400x571.jpg" alt="Skin On Fries">
                        </div>
                        <div class="card-txt">
                            <h2 class="ms_fs-2 ms_color-blue mt-1">Skin On Fries</h2>
                            <p class="mt-1 ms_color-red ms_fs-05">$3.00 - $6.00</p>
                        </div>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img src="../assets/choco-cookie-frappe-400x571.jpg" alt="">
                        </div>
                        <div class="card-txt">
                            <h2 class="ms_fs-2 ms_color-blue mt-1">Choco Cookie Frappe</h2>
                            <p class="mt-1 ms_color-red ms_fs-05">$4.99</p>
                        </div>
                    </div>
                </div>

                <!-- col -->
                <div class="col mb-5">
                    <div class="card">
                        <div class="card-img">
                            <img src="../assets/donut-burger-400x571.jpg" alt="">
                        </div>
                        <div class="card-txt">
                            <h2 class="ms_fs-2 ms_color-blue mt-1">The Donut burger</h2>
                            <p class="mt-1 ms_color-red ms_fs-05">$6.99</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- button -->
            <div class="text-center mb-5">
                <a href="#" class="btn fw-semibold">SART YOUR ORDER <i class="ms-1 fa-solid fa-circle-arrow-right"></i></a>
            </div>
        </div>

        <!-- bottom image -->
        <div class="ct-images">
            <div class="blur">
                <img src="../assets/svg-0.svg" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    h2,
    p {
        text-align: center;
    }

    .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        column-gap: 30px;

        .col {
            width: calc(100% / 3 );
        }
    }   
}

.ct-images {
    position: relative;
    background-image: url('../assets/first-order-background-scaled.jpg');
    background-size: cover;
    height: 530px;

    img {
        position: absolute;
        top: -65px;
    }

}

</style>