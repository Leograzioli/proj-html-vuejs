<script>
import AppList from './AppList.vue';
import { store } from '../store'

export default {
    name: 'AppFooter',
    components: {
        AppList
    },
    data () {
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
                <div class="col">
                    <h4>ORDER ONLINE</h4>
                    <AppList :links="store.orderOnlineLinks" />
                </div>

                <div class="col">
                    <h4>NAVIGATE</h4>
                    <AppList :links="store.navigateLinks" />
                </div>

                <div class="col info">
                    <h4>INFORMATION</h4>
                    <AppList :links="store.informationLinks" />
                </div>

                <div class="col">
                    <h4>OPENING HOURS</h4>
                    <AppList :links="store.openingHoursLink" />
                </div>

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
                    <div class="footer-logo mb-2">
                        <img src="../assets/takeout-logo.png" alt="">
                    </div>
                    <div class="footer-text">
                        <h2 class="ms_color-yellow ms_fs-3 mb-1"> Stay In The Loop </h2>
                        <p class="mb-2">Sing uo to recive up to date news and offers directly in your inbox:</p>
                    </div>
                    <div class="footer-imput-btn">
                        <div class="form">
                            <label class="d-none" for="email-input">Your email:</label>
                            <input type="email" id="email-input" placeholder="Input your email adress, ex: youremail@gmail.com">
                        </div>
                        <a href="#" class="btn large-btn mb-3">SUBSCRIBE</a>
                    </div>
                    <div class="icons-ct">
                        <div class="icons mb-3">
                            <a href="">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="">
                                <i class="fa-solid fa-wifi rotate"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                            <a href="">
                                <i class="fa-regular fa-envelope"></i>
                            </a>
                        </div>

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

        .icons  i{
            margin: 0 0.8rem;

        }
        .rotate {
            transform: rotate(45deg);
        }
    }
}
</style>