<script>
import MostPopular from './MostPopular.vue';
import MenuCategories from './MenuCategories.vue';
import AppDownload from './AppDownload.vue';
import AppNews from './AppNews.vue';

export default {
    name: 'AppMain',
    components: {
        MostPopular,
        MenuCategories,
        AppDownload,
        AppNews,
    }
}
</script>

<template>
    <main>
        <MostPopular />
        <MenuCategories />
        <AppDownload />
        <AppNews />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 10rem;
}
</style>