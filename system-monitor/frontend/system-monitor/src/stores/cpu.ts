import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import get_cpu_usage from '@/api/cpu'

export const useCPUStore = defineStore('cpu', () => {
  const usage = ref(5)
  async function update() {
    let { data } = await get_cpu_usage();
    usage.value = data.usage;
  }

  return { usage, update }
})
