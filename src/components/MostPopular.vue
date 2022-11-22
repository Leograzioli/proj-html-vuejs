<script>
import AppCard from './AppCard.vue';
export default {
    name: 'MostPopular',
    components: {
        AppCard,
    },
    data() {
        return {
            popularDishes: [
                {
                    name: 'Skin On Fries',
                    price: '$3.00 - $6.00',
                    img: '/skin-on-fries-400x571.jpg'
                },
                {
                    name: 'Choco Cookie Frappe',
                    price: '$4.99',
                    img: '/choco-cookie-frappe-400x571.jpg'
                },
                {
                    name: 'The Donut burger',
                    price: '$6.99',
                    img: '/donut-burger-400x571.jpg'
                }
            ],
        }
    },
    methods: {
        getPathImg(url) {
            return new URL(`../assets` + url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section id="most-popular">
        <div class="container">
            <!-- section title -->
            <h2 class="ms_fs-3 mb-5 text-center">Our Most Popular Dishes</h2>
            <div class="row mb-5">

                <!-- col -->
                <div v-for="(item, i) in popularDishes" :key="i" class="col">
                    <AppCard :item="item" />
                </div>
            </div>

            <!-- button -->
            <div class="text-center mb-6">
                <a href="#" class="btn fw-semibold">
                    SART YOUR ORDER <i class="ms-1 fa-solid fa-circle-arrow-right"></i>
                </a>
            </div>
        </div>

        <!-- bottom image -->
        <div class="ct-images">
            <div class="bg-image">
                <img src="../assets/svg-0.svg" alt="">
                <img class="blur first" src="../assets/svg-0.svg" alt="">
                <img class="blur second" src="../assets/svg-0.svg" alt="">
                <img class="blur third" src="../assets/svg-0.svg" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        column-gap: 30px;

        .col {
            width: calc(100% / 3);
        }
    }
}

.ct-images {
    position: relative;
    background-image: url('../assets/first-order-background-scaled.jpg');
    background-size: cover;
    height: 530px;
    width: 100%;
    overflow-x: hidden;

    .blur {
        filter: opacity(0.2);
    }

    .first {
        top: 8px;
        transform: rotate(2deg);
    }

    .second {
        top: -35px;
        transform: rotate(1deg);
    }

    .third {
        top: -55px;
        transform: rotate(2deg);
    }

    img {
        position: absolute;
        top: -95px;
    }
}
</style>