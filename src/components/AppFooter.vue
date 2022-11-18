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

                <div class="col">
                    <h4>INFORMATION</h4>
                    <AppList :links="store.informationLinks" />
                </div>

                <div class="col">
                    <h4>OPENING HOURS</h4>
                    <AppList :links="store.openingHoursLink" />
                </div>

                <div class="col">
                    <h4>VOUCHER</h4>
                    <AppList />
                </div>
            </div>

            <div class="footer-bottom">
                
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

        h4 {
            margin-bottom: 2.5rem;
        }
    }
}
</style>