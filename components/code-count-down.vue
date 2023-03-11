<template>
  <p class="Login-code-info" data-time="50"><b>{{ minutes }}:{{ seconds }}</b> Tekrar talep etmek için beklemeniz gereken
    süre
    <a href="">Yeni Doğrulama Kodu Gönder</a>
  </p>
</template>

<script>
export default {
  name: "CodeCountDown",
  props: {
    countdownTime: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      secondsLeft: this.countdownTime,
      interval: null,
      observer: null,
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.secondsLeft / 60)
    },
    seconds() {
      return this.secondsLeft % 60 < 10
        ? '0' + this.secondsLeft % 60
        : this.secondsLeft % 60
    }
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.interval) {
          this.interval = setTimeout(() => {
            this.secondsLeft = this.countdownTime
            this.startCountdown()
          }, 50)
        }
      }
    }, options)
    observer.observe(this.$el)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    startCountdown() {
      this.interval = setInterval(() => {
        if (this.secondsLeft <= 0) {
          clearInterval(this.interval)
          this.$emit('timeout')
        } else {
          this.secondsLeft--
        }
      }, 1000)
    }
  },
  watch: {
    secondsLeft(val) {
      if (val === 0) {
        this.$emit('timeout')
      }
    }
  }
}
</script>

<style>
</style>
