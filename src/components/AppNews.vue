<script>
import AppCard from './AppCard.vue';
export default {
    name: 'AppNews',
    components: {
        AppCard
    },
    data () {
        return {
            newProducts: [
                {
                    name: 'NEW: The Pancake Burger',
                    img: '/pancake-burger-600x450.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, maiores? Aliquid blanditiis modi, consectetur commodi eligendi recusandae provident nobis placeat perspiciatis non nihil'
                },
                {
                    name: 'New Milkshake Menu',
                    img: '/new-milkshake-menu-600x450.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, maiores? Aliquid blanditiis modi, consectetur commodi eligendi recusandae provident nobis placeat perspiciatis non nihil'
                },

            ]
        }
    }
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
                <div v-for="(item, i) in newProducts" :key="i" class="col">
                    <AppCard :item="item"/>
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


}
</style>