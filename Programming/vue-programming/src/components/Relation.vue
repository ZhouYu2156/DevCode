<script setup lang='ts'>
import { ref } from 'vue'

interface PropsType {
    showModal: (type: 'qq' | 'wechat' | 'sponsor') => void
}

const { showModal } = defineProps<PropsType>()

/** 社交链接是否激活 */
const isActives = ref<{
    qq: boolean,
    wechat: boolean,
    sponsor: boolean
}>({
    qq: false,
    wechat: false,
    sponsor: false
})

const handleClick = (type: 'qq' | 'wechat' | 'sponsor') => {
    if (isActives.value[type] === false) {
        showModal(type)
    }
    switch (type) {
        case 'qq':
            isActives.value.qq = !isActives.value.qq;
            break;
        case 'wechat':
            isActives.value.wechat = !isActives.value.wechat;
            break;
        case 'sponsor':
            isActives.value.sponsor = !isActives.value.sponsor;
            break;
        default:
            break;
    }
}
</script>

<template>
    <div id="rel" class="d-flex justify-content-end align-items-center">
        <!-- gihub -->
        <div>
            <a href="https://github.com/ZhouYu2156" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
                    view-box="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>
        </div>
        <!-- gitee -->
        <div>
            <a href='https://gitee.com/zhouyu2156' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-git"
                    viewBox="0 0 16 16">
                    <path
                        d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
                </svg>
            </a>
        </div>
        <!-- QQ联系 -->
        <div>
            <a @click="() => handleClick('qq')" href="javascript:void;" data-bs-toggle="modal"
                data-bs-target="#relations">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    :fill="isActives.qq ? 'red' : 'currentColor'" class="bi bi-envelope-fill" view-box="0 0 16 16">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
            </a>
        </div>
        <!-- 微信联系 -->
        <div>
            <a @click="() => handleClick('wechat')" href="javascript:void;" data-bs-toggle="modal"
                data-bs-target="#relations">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    :fill="isActives.wechat ? 'red' : 'currentColor'" class="bi bi-chat-dots-fill" view-box="0 0 16 16">
                    <path
                        d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
            </a>
        </div>
        <!-- 赞助 -->
        <div>
            <a @click="() => handleClick('sponsor')" href="javascript:void;" data-bs-toggle="modal"
                data-bs-target="#relations">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    :fill="isActives.sponsor ? 'red' : 'currentColor'" class="bi bi-heart-fill" view-box="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </a>
        </div>
    </div>
</template>

<style scoped></style>