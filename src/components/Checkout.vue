<template>
    <div class="w-checkout">
        <Order v-bind:items="items" />
        <Payment v-bind:total="total" />
    </div>
</template>

<script>
import Order from './Order.vue'
import Payment from './Payment.vue'

export default {
    name: "Checkout",
    components: {
        Order,
        Payment
    },
    data() {
        return {
            items: [
                {
                    id:1,
                    title:'Dog Shoes',
                    price: 28.00,
                    picture: require('../assets/products/dog-shoes.jpg')                    
                },
                {
                    id:2,
                    title:'Dog Hat',
                    price: 18.99,
                    picture: require('../assets/products/dog-hat.jpg')
                },
                {
                    id:3,
                    title:'Cat Bowl',
                    price: 25.50,
                    picture: require('../assets/products/cat-bowl.jpg')
                }
            ]
        }
    },
    computed: {
        total() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
        }
    }
    
}
</script>

<style scoped>
.w-checkout {
    display: grid;
    grid-template: auto / 1fr 1fr;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 3px 10px #999;
    box-shadow: 0px 3px 10px #999;

}

</style>


