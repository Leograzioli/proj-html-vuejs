<script>
import AppList from './AppList.vue';
import { store } from '../store'

export default {
    name: 'AppFooter',
    components: {
        AppList
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer>
        <div class="footer-ct ">
            <div class="row d-flex justify-content-between">

                <!-- order online col -->
                <div class="col">
                    <h4>ORDER ONLINE</h4>
                    <AppList :links="store.orderOnlineLinks" />
                </div>

                <!-- navigate col -->
                <div class="col">
                    <h4>NAVIGATE</h4>
                    <AppList :key="i" :links="store.navigateLinks" />
                </div>

                <!-- information col -->
                <div class="col info">
                    <h4>INFORMATION</h4>
                    <AppList :links="store.informationLinks"/>
                </div>

                <!-- opening hours col -->
                <div class="col">
                    <h4>OPENING HOURS</h4>
                    <AppList :links="store.openingHoursLink" />
                </div>

                <!-- voucher col -->
                <div class="col voucher text-center">
                    <h4>VOUCHER</h4>
                    <img src="../assets/footer-coupon-200x200.png" alt="">

                    <div class="txt">
                        <p>Just Use The Code</p>
                        <p class="ms_color-yellow ms_fs-1">FIRSTORDER</p>
                        <p>At Checkout</p>
                    </div>
                </div>
            </div>

            <div class="ct d-flex justify-center mt-4">
                <div class="footer-bottom text-center">

                    <!-- footer logo -->
                    <div class="footer-logo mb-2">
                        <img src="../assets/takeout-logo.png" alt="">
                    </div>

                    <!-- text -->
                    <div class="footer-text">
                        <h2 class="ms_color-yellow ms_fs-3 mb-1"> Stay In The Loop </h2>
                        <p class="mb-2">Sing uo to recive up to date news and offers directly in your inbox:</p>
                    </div>

                    <!-- button and imput -->
                    <div class="footer-imput-btn">
                        <div class="form">
                            <label class="d-none" for="email-input">Your email:</label>
                            <input type="email" id="email-input"
                                placeholder="Input your email adress, ex: youremail@gmail.com">
                        </div>
                        <a href="#" class="btn large-btn mb-3">SUBSCRIBE</a>
                    </div>

                    <!-- social media icons -->
                    <div class="icons-ct">
                        <ul class="icons mb-3 d-flex justify-center">
                            <li v-for="(icon, i) in store.socialIcons" :key="i">
                                <a :href="icon.href" :class="icon.tag">
                                    <i :title="icon.name" :class="icon.iconClass"></i>
                                </a>
                            </li>
                        </ul>

                        <!-- copyrights  -->
                        <div class="copyright">
                            <small>
                                <p class="fw-bold">
                                    <span class="ms_color-yellow">&copy;
                                        Copyright 2012-2022 | Avada Theme by
                                    </span>
                                    ThemeFusion
                                    <span class="ms_color-yellow">
                                        | All Rights Reserved | Powered by
                                    </span>
                                    WordPress
                                </p>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 1250px;
    background-image: url('../assets/footer-background-scaled.jpg');
    background-size: cover;
    background-position: center;

    padding-top: 10rem;

    .footer-ct {
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
        color: white;

        .voucher {
            img {
                width: 150px;
            }

            .txt {
                font-weight: bold;
            }
        }

        h4 {
            margin-bottom: 2.5rem;
        }
    }

    .footer-bottom {
        width: 100%;

        .ct {
            width: 70%;
            margin: 0 auto;
        }

        .footer-logo {
            display: flex;
            justify-content: center;

            img {
                width: 200px;
            }
        }

        .form {

            input {
                width: 60%;
                height: 40px;
                border-radius: 20px;
                border: none;
                padding: 0 1rem;
                margin-bottom: 1.5rem;
            }
        }

        .large-btn {
            width: 60%;
            height: 40px;
        }

        .icons i {
            margin: 0 0.8rem;
        }
        
        .icons a {
            display: inline-block;
            transition: color 0.7s;
            transition: transform 0.3s;
        }

        .icons .fb:hover {
            transform: scale(1.3);
            color: rgb(0, 68, 255);
        }

        .icons .tw:hover {
            transform: scale(1.3);
            color: rgb(0, 132, 255);
        }

        .icons .insta:hover {
            transform: scale(1.3);
            color: #e22f6d;
        }

        .icons .in:hover {
            transform: scale(1.4);
        }

        .icons .rss:hover {
            transform: scale(1.3);
            color: #f99a38;
        }

        .icons .yt:hover {
            transform: scale(1.3);
            color: rgb(255, 0, 0);
        }

        .icons .mail:hover {
            transform: scale(1.4);
        }

        .rotate {
            transform: rotate(45deg);
        }
    }
}
</style>