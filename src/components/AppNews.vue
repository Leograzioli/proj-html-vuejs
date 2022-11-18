<script>
export default {
    name: 'AppNews'
}
</script>

<template>
    <section id="news">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="ms_fs-3">Latest News</h2>
                <div>
                    <a href="#" class="btn">READ MORE NEWS <i class="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </div>

            <div class="row d-flex">

                <!-- col -->
                <div class="col">
                    <div class="card">

                        <!-- image card -->
                        <div class="card-img mb-3">
                            <img src="../assets/pancake-burger-600x450.jpg" alt="">
                        </div>

                        <!-- text card -->
                        <div class="card-txt text-center">
                            <h2 class="mb-1 ms_color-blue ms_fs-3">NEW: The Pancake Burger</h2>
                            <p class="ms_color-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                                maiores? Aliquid blanditiis modi, consectetur commodi eligendi recusandae provident
                                nobis placeat perspiciatis non nihil
                            </p>
                        </div>
                    </div>
                </div>

                <!-- col -->
                <div class="col">
                    <div class="card">

                        <!-- image card -->
                        <div class="card-img mb-3">
                            <img src="../assets/new-milkshake-menu-600x450.jpg" alt="">
                        </div>

                        <!-- text card -->
                        <div class="card-txt text-center">
                            <h2 class="mb-1 ms_color-blue ms_fs-3">New Milkshake Menu</h2>
                            <p class="ms_color-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                                maiores? Aliquid blanditiis modi, consectetur commodi eligendi recusandae provident
                                nobis placeat perspiciatis non nihil
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 8rem 0;

    .row {
        column-gap: 2.5rem;

    }

    p {
        line-height: 1.5rem;
    }

    .card-img {
        height: 100%;
        background-color: black;
        
        img {
            display: block;
            transition: filter 0.5s;
        }
    }
    .card-img img:hover {
       filter: opacity(0.5);
    }
}
</style>