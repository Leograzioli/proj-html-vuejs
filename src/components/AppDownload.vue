<script>
export default {
    name: 'AppDownload'
}
</script>

<template>
    <section id="download-app">
        <div class="container">
            <div class="order-app">
                <p class="ms_fs-3 fw-semibold">Download Our</p>
                <p class="ms_color-yellow ms_fs-5 fw-bold mb-5">Ordering App</p>
                <div class="store d-flex">

                    <!-- apple store -->
                    <a href="">
                        <img src="/public/assetsapp-store-badge.png" alt="apple store">
                    </a>

                    <!-- google play -->
                    <a href="">
                        <img src="/public/assets/play-store-badge.png" alt="google play store">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url('/public/assets/app-ordering-scaled.jpg');
    background-size: cover;

    .order-app {
        padding: 10rem 0 9rem;
        color: white;

        .store {

            img {
                width: 180px;
                margin-right: 1rem;
            }
        }

    }
}
</style>