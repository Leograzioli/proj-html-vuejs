<script>
export default {
    name: 'MenuCategories',
}
</script>

<template>
    <section id="most-popular">
        <div class="container">

            <!-- title and button -->
            <div class="top-ct d-flex justify-content-between align-items-center mb-4">
                <div class="title">
                    <h2 class="ms_fs-3">Menu Categories</h2>
                </div>
                <div>
                    <a href="" class="btn">
                        VIEW THE FULL MENU <i class="ms-1 fa-solid fa-circle-arrow-right"></i>
                    </a>
                </div>
            </div>

            <!-- grid -->
            <div class="row d-flex justify-content-between">

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/appetizers-menu-background.jpg" alt="appetizers image">
                        <p>APPETIZERS</p>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/burgers-menu-background.jpg" alt="burger image">
                        <p>BURGERS</p>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/pizza-menu-background.jpg" alt="pizza image">
                        <p>PIZZAS</p>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/fries-menu-background.jpg" alt="fries image">
                        <p>FRIES</p>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/sides-menu-background.jpg" alt="sides image">
                        <p>SIDES</p>
                    </div>
                </div>
                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/desserts-menu-background.jpg" alt="desserts image">
                        <p>DESSERTS</p>
                    </div>
                </div>
                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/beverages-menu-background.jpg" alt="beverages image">
                        <p>BEVERAGES</p>
                    </div>
                </div>
                <!-- col -->
                <div class="col">
                    <div class="card">
                        <img src="../assets/specials-menu-background.jpg" alt="specials image">
                        <p>SPECIALS</p>
                    </div>
                </div>

                <!-- col icon -->
                <div class="col">
                    <div class="card-icon">
                        <div class="text-center">
                            <i class="fa-solid fa-leaf fa-xl ms_color-dgreen"></i>
                            <p>Vegetarian</p>
                        </div>
                    </div>
                </div>

                <!-- col icon -->
                <div class="col">
                    <div class="card-icon">
                        <div class="text-center">
                            <i class="fa-solid fa-wheat-awn ms_color-yellow"></i>
                            <p>Gluten Free</p>
                        </div>
                    </div>
                </div>

                <!-- col icon -->
                <div class="col">
                    <div class="card-icon">
                        <div class="text-center">
                            <i class="fa-solid fa-bottle-droplet ms_color-lblue"></i>
                            <p>Dairy Free</p>
                        </div>
                    </div>
                </div>

                <!-- col icon -->
                <div class="col">
                    <div class="card-icon">
                        <div class="text-center">
                            <i class="fa-solid fa-drumstick-bite ms_color-brown"></i>
                            <p>Keto Friendly</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 9rem;

    .row {
        flex-wrap: wrap;
        gap: 15px;

        .col {
            width: calc(100% / 4 - 15px);

            .card {
                position: relative;
                background-color: black;
                max-height: 210px;
                overflow: hidden;

                img {
                    filter: opacity(0.5);
                    object-fit: contain;
                    display: block;
                }

                p {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-weight: bold;
                }
            }

            .card-icon {
                max-height: 210px;

                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5rem;

                i {
                    font-size: 4rem;
                }

                p {
                    margin-top: 15px;
                    font-weight: bold;
                    font-size: 1.3rem;
                }
            }
        }
    }
}
</style>