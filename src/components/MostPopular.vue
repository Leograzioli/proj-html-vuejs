<script>
export default {
    name: 'MostPopular',
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
            <h2 class="ms_fs-3 mb-5">Our Most Popular Dishes</h2>
            <div class="row mb-5">

                <!-- col -->
                <div v-for="(item, i) in popularDishes" :key="i" class="col">
                    <div class="card">

                        <!-- card image -->
                        <div class="card-img">
                            <img :src="getPathImg(item.img)" alt="Skin On Fries">

                            <!-- hover -->
                            <div class="img-hover">
                                <div class="icon">
                                    <i class="fa-regular fa-square"></i>
                                    <i class="absolute fa-solid fa-check"></i>
                                </div>
                                <div class="txt fw-bold">
                                    <p>View Cart</p>
                                </div>
                            </div>
                        </div>

                        <!-- card text -->
                        <div class="card-txt">
                            <h2 class="ms_fs-2 ms_color-blue mt-1">{{ item.name }}</h2>
                            <p class="mt-1 ms_color-red ms_fs-05">{{ item.price }}</p>
                        </div>
                    </div>
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
            width: calc(100% / 3);

            .card-img {
                position: relative;
                cursor: pointer;
                background-color: black;

                img {
                    display: block;
                    transition: opacity 0.5s;
                }
            }

            .card:hover .img-hover {
                opacity: 1;
            }

            .card:hover img {
                opacity: 0.6;
            }

            .img-hover {
                opacity: 0;
                transition: opacity 0.5s;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;

                .icon {
                    position: relative;
                    text-align: center;
                    margin: 0 auto 1rem;
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.7);

                    .absolute {
                        position: absolute;
                        top: 48%;
                        left: 55%;
                        transform: translate(-50%, -50%);
                        font-size: 1.2rem;
                    }
                }
            }
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