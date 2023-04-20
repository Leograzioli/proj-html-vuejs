<script>
export default {
    name: 'AppCard',
    props: {
        item: Object
    },
    methods: {
        getPathImg(url) {
            return new URL(`/public/assets` + url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card">

        <!-- card image -->
        <div class="card-img">
            <img :src="getPathImg(item.img)" :alt="item.name">

            <!-- hover -->
            <div v-if="item.price" class="img-hover">
                <div class="icon">
                    <i class="fa-regular fa-square"></i>
                    <i class="absolute fa-solid fa-check"></i>
                </div>
                <div class="txt fw-bold">
                    <p>
                        <a href="/cart">View Cart</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- card text -->
        <div class="card-txt">
            <h2 class="ms_fs-2 ms_color-blue mt-2">
                <a href="">{{ item.name }}</a>
            </h2>
            <p v-if="item.price" class="mt-1 ms_color-red ms_fs-05">
                <a href="">{{ item.price }}</a>
            </p>

            <p v-else class="ms_color-gray mt-1"> {{ item.description }} </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2,
p {
    text-align: center;
    line-height: 1.5rem;
}

.card-img {
    position: relative;
    cursor: pointer;
    background-color: black;

    img {
        display: block;
        transition: opacity 0.5s;
    }
}

.ms_color-blue {
    transition: color 0.5s;
}

.card-txt:hover .ms_color-blue {
    color: #cc1a26;
}

.card-img:hover .img-hover {
    opacity: 1;
}

.card-img:hover img {
    opacity: 0.6;
}

.img-hover {
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    .icon {
        position: relative;
        text-align: center;
        margin: 0 auto 1rem;
        width: 70px;
        height: 70px;
        line-height: 70px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.7);

        .absolute {
            position: absolute;
            top: 48%;
            left: 55%;
            transform: translate(-50%, -50%);
            font-size: 1.2rem;
        }
    }
}
</style>