<template>

</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    name: 'MoreVillasSlider',
    components: {
        Swiper,
    },
    props: ['sectionTitle'],
    data() {
        return {

        }
    },
    created() {
    },
    async mounted() {
        Swiper.use([Navigation, Pagination])



    },

    methods: {
        isFavorite(code) {
            return this.$store.state.favorite.favorites.includes(code)
        },
        toggleFavorite(code) {
            event.stopPropagation();
            if (this.isFavorite(code)) {
                this.$store.dispatch('favorite/removeFavorite', code)
            } else {
                this.$store.dispatch('favorite/addFavorite', code)
            }
        }
    }


}
</script>
