import { useRouter } from 'vue-router';

const router = useRouter();

export const pusher = () => {
    router.push({
        name:'home'
    })
}