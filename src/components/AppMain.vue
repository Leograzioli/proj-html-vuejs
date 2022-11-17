<script>
import MostPopular from './MostPopular.vue';

export default {
    name: 'AppMain',
    components: {
        MostPopular,
    }
}
</script>

<template>
    <main>
        <MostPopular />
    </main>
</template>

<style lang="scss" scoped>
main {
    margin-top: 10rem;
}
</style>