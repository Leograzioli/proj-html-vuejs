<script>
import MostPopular from './MostPopular.vue';
import MenuCategories from './MenuCategories.vue';

export default {
    name: 'AppMain',
    components: {
        MostPopular,
        MenuCategories,
    }
}
</script>

<template>
    <main>
        <MostPopular />
        <MenuCategories />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 10rem;
}
</style>