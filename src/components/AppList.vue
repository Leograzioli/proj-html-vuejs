<script>
export default {
    name: 'AppList',
    props: {
        links: Object
    },
    methods: {

        getPathImg(url) {
            return new URL(`../assets` + url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <ul>
        <li :class="links.name ? '' : 'lh-1'">

            <!-- if by name -->
            <a v-if="links.name" :href="links.href">
                {{ links.name }}
            </a>

            <!-- if by day -->
            <a v-else-if="links.day" :href="links.href">
                {{ links.day }} <span class="ms_color-yellow">{{ links.hour }}</span>
            </a>

            <!-- if by image -->
            <a v-else :href="links.href">
                <img class="img-detail" :src="getPathImg(links.img)" :alt="links.href">
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    li {
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        font-weight: 600;
        transition: color 0.3s;

        .img-detail {
            width: 150px;
            border: 1px solid white;
            border-radius: 10px;
        }
    }

    .lh-1 {
        margin-bottom: 0.8rem;
    }

    li:hover {
        color: #fcdc31;
    }
}
</style>