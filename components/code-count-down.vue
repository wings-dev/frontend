<template>
  <p class="Login-code-info" data-time="50">
    <b>{{ minutes }}</b> Tekrar talep etmek için beklemeniz gereken süre
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
    }
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.secondsLeft / 60)
      const seconds = this.secondsLeft % 60 < 10 ? '0' + this.secondsLeft % 60 : this.secondsLeft % 60
      return `${minutes}:${seconds}`
    }
  },
  mounted() {
    this.$emit('started');
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.interval = setTimeout(() => {
        if (this.secondsLeft <= 0) {
          this.$emit('timeout')
        } else {
          this.secondsLeft--
          this.startCountdown()
        }
      }, 1000)
    }
  },
  beforeDestroy() {
    clearTimeout(this.interval)
  }
}
</script>
