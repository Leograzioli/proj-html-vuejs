<script>
export default {
    name: 'AppHeader',
    props: {
        links: Object,
    }, 
    computed: {
        
    }
}
</script>

<template>
    <header>
        <div class="container">

            <!-- nav bar -->
            <div class="ms_nav-bar pt-5 d-flex align-items-center justify-content-between">

                <!-- logo -->
                <div class="ms_logo">
                    <a href="">
                        <img src="../assets/takeout-logo.png" alt="">
                    </a>
                </div>

                <!-- links -->
                <nav class="ms_links ">
                    <ul class="d-flex align-items-center ms_color-white fw-bold">
                        <li 
                        class="ms-2" 
                        @click.prevent="$emit('clickedLink', item.id)" 
                        :class="{'active': item.active}" 
                        v-for="(item, i) in links" :key="i"
                        >
                            <a v-if="item.name" :href="item.href">{{ item.name }}</a>
                            <a v-else :href="item.href">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- icons -->
            <div class="icons p-1">
                <a href="#" class="plus mb-5">
                    <i class="fa-solid fa-plus"></i>
                </a>
                <div class="on-sale">
                    <a href="#" class="square">
                        <div class="square-inner">
                            <i class="fa-solid fa-audio-description"></i>
                            <p>Demos</p>
                        </div>
                    </a>
                    <a href="#" class="square">
                        <div class="square-inner">
                            <span class="dollar ms_color-green ms-05">$</span>
                            <span class="ms_fs-1 fw-bold ms_color-green ms-05">39</span>
                            <p>On Sale</p>
                        </div>
                    </a>
                </div>
            </div>

            <!-- container hungry delivery -->
            <div class="hungry-ct ms_color-white">
                <p class="ms_fs-3 fw-semibold">Hungry?</p>
                <p class="ms_color-yellow ms_fs-5 fw-bold">Great Food</p>
                <p class="ms_fs-5 fw-bold mb-2">Delivered</p>
                <a href="#" class="btn ms_fs-02"> 
                    view our menu <i class="ms-1 fa-solid fa-circle-arrow-right"></i>
                </a>
            </div>

            <!-- nav links bottom  -->
            <nav class="header-bottom d-flex justify-content-between">
                <ul class="d-flex justify-content-between">
                    <li>
                        <a href="">
                            <i class="fa-regular fa-clock me-1"></i>
                            <p>24/7 DELIVERY</p>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-solid fa-burger me-1"></i>
                            <p>OVER 100 DISHES</p>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-solid fa-mobile-screen-button me-1"></i>
                            <p>IN APP ORDERING</p>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="fa-solid fa-car me-1"></i>
                            <p>FAST DELIVERY</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: relative;

    background-image: url('../assets//home-background-hero-scaled.jpg');
    background-size: cover;
    background-position: bottom;
    height: 1000px;

    .ms_links li.active::after {
        content: "";
        border: solid #fcdc31;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 0.4rem;
        transform: rotate(45deg);
    }

    .ms_links li.active {
        color: #fcdc31;
    }

    .ms_links li:hover {
        transition: color 0.5s;
        color: #fcdc31;
    }

    .icons {
        position: absolute;
        right: 0;
        top: 0;
        color: white;

        .plus {
            display: inline-block;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            background-color: #cc1a26;
            transition: background-color 0.3s;
        }

        .plus:hover {
            background-color: #ce4049;
        }

        .square {
            position: relative;
            text-align: center;
            width: 55px;
            height: 55px;
            border-radius: 5px;
            color:#33475b;
            background-color: white;
            margin-bottom: 0.3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            p {
                font-size: 0.7rem;
                font-weight: bold;
            }

            .dollar {
                position: absolute;
                left: 5px;
                font-weight: bold;
            }
        }
    }

    .hungry-ct {
        margin-top: 11.5rem;
    }

    .header-bottom {
        position: absolute;
        bottom: -40px;

        max-width: 1200px;
        width: 80%;
        height: 80px;
        background-color: white;
        padding: 1rem 3.5rem;

        align-items: flex-end;

        ul {
            width: 100%;

            a {
                display: flex;
            }

            p {
                color: rgb(85, 85, 85);
                font-weight: bold;
            }
        }
    }
}
</style>
