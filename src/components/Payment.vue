<template>
    <section class="w-payment">
        <h1 class="total-amount">Total: {{total | currency}}</h1>
        <CheckoutForm />
    </section>
</template>

<script>
import CheckoutForm from './CheckoutForm'

export default {
    name: "Payment",
    props: ["total"],
    components: {
        CheckoutForm
    }

}
</script>

<style>
.w-payment {
    background-color: #fbc605;
    color: #fff;
    padding: 1rem 3rem 3rem;
}

.total-amount {
    color: #fff;
    text-align: right;
}

</style>


