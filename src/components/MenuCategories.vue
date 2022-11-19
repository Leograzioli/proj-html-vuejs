<script>
import { store } from '../store';
import CardMenuCtegories from './CardMenuCtegories.vue';

export default {
    name: 'MenuCategories',
    data () {
        return {
            store,
        }
    },
    components: {
        CardMenuCtegories,
    } 
}
</script>

<template>
    <section id="menu-categories">
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
            <div class="row d-flex justify-content-between mb-4">

                <!-- col -->
                <div v-for="(item, i) in store.menuCategories" :key="i" class="col">
                    <CardMenuCtegories :item="item" />
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
        }
    }
}
</style>