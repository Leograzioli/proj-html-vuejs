<script>
import MostPopular from './MostPopular.vue';
import MenuCategories from './MenuCategories.vue';
import AppDownload from './AppDownload.vue';

export default {
    name: 'AppMain',
    components: {
        MostPopular,
        MenuCategories,
        AppDownload,
    }
}
</script>

<template>
    <main>
        <MostPopular />
        <MenuCategories />
        <AppDownload />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 10rem;
}
</style>