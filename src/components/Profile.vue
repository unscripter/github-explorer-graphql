<template>
    <div class="row user-description">
            <div class="row profile-description">
                <div class="avatar">
                    <avatar :src="user.avatarUrl" class="user-avatar-80" :id="user.login"></avatar>
                </div>
                <div class="user-info">
                    <h1 class="fullname">{{user.name}}</h1>
                    <h2 class="loginname">{{user.login}}</h2>
                </div>
            </div>
            <div style="text-align: center">
                {{user.bio}}
            </div>
            <div class="row follower-info">
                <div>
                    {{followers}}
                    <h1>Followers</h1>
                </div>
                <div>
                    {{following}}
                    <h1>Following</h1>
                </div>
                <div>
                    <span>{{repoCount}}</span>
                    <h1>Repositories</h1>
                </div>
            </div>
        </div>
</template>
<script>
import Avatar from '@/components/Avatar'
import { mapGetters } from 'vuex';

export default {
    components: {
        Avatar
    },
    props: {
        user: {
            type: Object,
            default: {}
        }},
    computed: {
        ...mapGetters(['repoCount']),
        followers() {
            if (this.user && this.user.followers) {
                return this.user.followers.totalCount;
            }
        },
        following() {
            if (this.user && this.user.following) {
                return this.user.following.totalCount;
            }
        }
    }
    
}
</script>


<style lang="scss" scoped>
.user-info {
        font-size: 20px;
        bottom: 0;
        @media (max-width: 768px) {
            font-size: 10px;
        }
    }
    .user-description {
        padding: 10px;
        grid-template-rows: 120px 100px 50px;
        background-color: var(--c-blue-light);
    }
    .profile-description {
        grid-template-columns: 120px 200px;
        grid-template-rows: 5px 5px;
        @media (max-width: 768px) {
            grid-template-columns: 120px auto;
            grid-template-rows: 5px 5px;
            margin: 10px;
            font-size: 5px;
        }
    }
    .follower-info {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 100px 100px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 12px;
            h1 {
                font-size: 12px;
            }
        }
    }
    .fullname {
        margin-top: 10px;
    }
    .loading {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: .25rem solid rgba(255,255,255,0.2);
        border-top-color: white;
        animation: spin 1s infinite linear;
        margin: 15px auto;
    }
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

