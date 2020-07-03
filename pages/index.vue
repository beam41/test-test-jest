<template>
  <div class="hi">
    Hi
    <Greeting />
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue'
export default {
  components: {
    Greeting,
  },
}
</script>

<style scoped>
.hi {
  color: red;
}
</style>
