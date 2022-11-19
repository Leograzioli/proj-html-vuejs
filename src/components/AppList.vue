<script>
export default {
    name: 'AppList',
    props: {
        links: Object
    },
    methods: {
        
        getPathImg(url) {
            return new URL(`../assets`+ url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <ul >
        <li v-for="(item, i) in links" :key="i" :class="item.name? '' : 'lh-1'">

            <!-- if by name -->
            <a v-if="item.name" :href="item.href">
                {{ item.name }}
            </a>

            <!-- if by day -->
            <a v-else-if="item.day" :href="item.href">
                {{ item.day }} <span class="ms_color-yellow">{{ item.hour }}</span>
            </a> 

            <!-- if by image -->
            <a v-else :href="item.href">
                <img class="img-detail" :src="getPathImg(item.img)" :alt="item.href">
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
        color: #fcdc31;;
    }
}
</style>