<template>
<section class="w-order">
    <h1 class="primary-title">Order</h1>
    <vueper-slides 
        fade 
        slide-content-outside="top" 
        slide-content-outside-class="max-widthed" 
        fixed-height="350px"
         class="no-shadow"
        :touchable="false" 
        :slide-ratio="0.3"
        :arrows-outside="true">
        <vueper-slide  
            v-for="(item, i) in items"
            :key="i"
            :image="item.picture"
            :title="item.title"
            :content="item.price | currency"
        >
        </vueper-slide>
    </vueper-slides>
</section>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: "Order",
    props: ["items"],
    components: { 
        VueperSlides, 
        VueperSlide 
        }
}
</script>

<style>
.w-order {
    padding: 1rem 3rem 3rem;
}

.primary-title {
    text-align: center;

}
.vueperslide__content-wrapper {
    display: flex;
    justify-content: space-between;
}

.vueperslide__title {
    font-size: 18px;
    font-weight: 700;
}

.vueperslide__content {
    font-size: 20px;
    font-weight: 700;
    color: #999;
}



</style>


