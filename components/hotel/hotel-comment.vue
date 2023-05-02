<template>
    <div class="otel-reviews-item">
        <div class="otel-reviews-item-left">
            <div class="otel-reviews-item-left-top">
                <h6>
                    {{ comment.user?.name }} {{ comment.user?.surname }}
                </h6>
                <span>{{ comment.accommodation?.reason }}</span>
            </div>
            <div class="otel-reviews-item-left-bottom">
                <p>
                    <i class="icon-date"></i>
                    {{ new Date(comment.commentDate).toLocaleString('tr-TR', { month: 'long', year: 'numeric' }) }}
                </p>
            </div>
        </div>
        <div class="otel-reviews-item-right">
            <div class="otel-reviews-item-right-head">
                <div class="Otel-card-review">
                    <span :style="{ 'background-color': comment.scoreColor }">{{ comment.score }}/10</span>
                    <b>{{ comment.scoreText }}</b>
                </div>
                <p>
                    Yorum kaynağı
                    <b>{{ comment.provider }}</b>
                </p>
            </div>
            <div class="otel-reviews-item-right-text">
                <p :class="{ 'collapsed': isCollapsed }">{{ comment.contents?.[0]?.content }}</p>
                <button type="button" class="otel-reviews-item-button" v-if="comment.contents?.[0]?.content.length > maxLength" @click="toggleCollapse">{{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'HotelComment',
    data() {
        return {
            isCollapsed: true,
            maxLength: 300
        }
    },
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    created() {

    },
    computed: {
        buttonText() {
            return this.isCollapsed ? 'Tümünü Gör' : 'Daha Az Gör'
        }
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed
        }
    }
}
</script>
    
    