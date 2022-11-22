<script>
export default {
    name: 'CardMenuCategories',
    props: {
        item: Object,
    },
    methods: {
        getPathImg(url) {
            return new URL(`../assets` + url, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div :class="item.class ? 'card-icon' : 'card'">
        <a v-if="item.class" href="">
            <i :class="item.class"></i>
            <p>{{ item.name }}</p>
        </a>

        <a v-else href="">
            <img :src="getPathImg(item.img)" alt="appetizers image">
            <p>{{ item.name }}</p>
        </a>
    </div>
</template>

<style lang="scss" scoped>
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

.card:hover img{
    filter: opacity(0.8);
}

.card-icon {
    text-align: center;
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

.card-icon:hover i{
    filter: brightness(1.5);
}
</style>