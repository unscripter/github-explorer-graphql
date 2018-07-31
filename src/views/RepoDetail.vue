<template>
    <div>
        <modal v-if="tabModal" @close="SHOW_HIDE_MODAL_TAB_MODAL( { type: 'tabModal', open: false } )" :modalID="'tabModal'">
            <span slot="header">{{currentRepoDetail.name}} - {{currentRepoDetail.description}}</span>
            <tab :tabs="tabInfo" slot="body"></tab>
            <h1 slot="footer">Footer</h1>
        </modal>
    </div>
</template>
<script>
import Tab from '@/components/Tab';
import Modal from '@/components/Modal';
import { mapGetters, mapMutations } from 'vuex';


export default {
    components: {
        Tab,
        Modal
    },
    computed: {
        ...mapGetters(['currentRepoDetail', 'tabModal'])
    },
    data () {
        return {
            tabInfo: [{ tab_name: 'TimeLine', comp_name: 'tabs/Timeline', isActive: true, props: {title: 'myRepo'}},
                        { tab_name: 'Details', comp_name: 'Loading', isActive: false, props: {}},
                        { tab_name: 'Owner', comp_name: 'Loading', isActive: false, props: {}},
                        { tab_name: 'Visualization', comp_name: 'tabs/Visualization', isActive: false, props: {}}]
        }
    },
    methods: {
        ...mapMutations(['SHOW_HIDE_MODAL_TAB_MODAL']),
    }
    
}
</script>


