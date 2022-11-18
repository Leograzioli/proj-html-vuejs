<script>
export default {
    name: 'AppList',
    props: {
        links: Object
    }
}
</script>

<template>
    <ul>
        <li v-for="(item, i) in links" :key="i">
            <a :href="item.href">{{ item.name }}</a> 
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    li {
        margin-bottom: 1.8rem;
        font-size: 0.8rem;
        font-weight: 600;
    }
}
</style>