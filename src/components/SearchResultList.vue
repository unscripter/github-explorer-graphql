<template>
    <div class="scroll-list">
        <a @click="handleClick(item.node.login)" v-for="item in searchResult" :key="item.node.login" class="row list-item" name="item.node.login">
            <avatar :src="item.node.avatarUrl" className="user-avatar"></avatar>
            <div class="user-info">
                <div class="fullname">{{item.node.name}}</div>
                <div class="loginname">{{item.node.login}}</div>
            </div>
        </a>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import { mapMutations } from 'vuex';

export default {
    components: {
        Avatar
    },
    props: ['searchResult'],
    methods: {
        ...mapMutations(['SHOW_HIDE_NAVIGATION']),
        handleClick(username) {
            setTimeout(() => {
                this.$router.push({
                    name: 'USER_DETAIL',
                    params: {
                        username
                    }
                });
                this.SHOW_HIDE_NAVIGATION();
            }, 300);
        },
    }
}
</script>

<style lang="scss">
.scroll-list {
    position: absolute;
    overflow-y: scroll; 
    overflow-x: hidden;
    height: 620px;
    width: 270px;
    -webkit-overflow-scrolling: touch;
    .list-item {
        grid-template-columns: 50px 200px;
        margin-bottom: 5px;
        line-height: 1rem;
    }
    .user-info {
        grid-template-rows: 10px;
        grid-gap: 0; 
    }
    .fullname {
            font-family: GothamPro-Medium;
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 5px;
    }
    .loginname {
        font-family: GothamPro-Medium;
        font-size: 12px;
        color: #ffffff;
        margin-bottom: 15px;
    }
}
</style>


