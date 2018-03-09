<template>
    <p>{{greeting}}world！</p>
</template>
<script src="./js/vue.js"></script>
<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>
<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>