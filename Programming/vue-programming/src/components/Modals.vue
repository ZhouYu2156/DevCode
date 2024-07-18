<script setup lang='ts'>
import { ref } from 'vue'

interface PropsType {
    imgData: string,
}
const { imgData } = defineProps<PropsType>()
</script>

<template>
    <div class="modal fade" tabindex="-1" id="relations">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 :style='{ userSelect: "none", textAlign: "center" }'>
                        感谢 - 光临
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img :src="imgData" alt="" :style='{ width: "15rem", height: "15rem" }' />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>