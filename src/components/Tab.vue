<template>
  <div class="title">
      <ul>
        <li v-for="tab in tabs" :key="tab.tab_name" :name="tab.tab_name" @click="queryTabChange(tab)" :class="{'active': tab.isActive}">{{tab.tab_name}}</li>
      </ul>
      <div class="tab-content">
        <keep-alive>
          <component :is="currentComponent" :parentData="currentProps" style="color: black; position: relative"/>
        </keep-alive>
      </div>
  </div>  
</template>

<script>
import { lazyLoadComponent } from "@/utils/dynamicLoading";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  created() {
    debugger;
    this.SET_CURRENT_COMPONENT_TEXT({ component: "tabs/Timeline" });
    this.getCurrentComponentData({
      name: "tabs/Timelime",
      apolloClient: this.$apollo
    });
  },
  computed: {
    ...mapGetters([
      "currentComponentText",
      "currentComponentData",
    ]),
    currentComponent() {
      debugger;
      this.currentComponentText;
      return () => import(`@/components/${this.currentComponentText}.vue`);
    }
  },
  data() {
    return {
      component: "tabs/Timeline",
      currentProps: { title: "vuejs" }
    };
  },
  methods: {
    ...mapActions(["getCurrentComponentData"]),
    ...mapMutations(["SET_CURRENT_COMPONENT_TEXT"]),
    queryTabChange(tab) {
      debugger;
      this.SET_CURRENT_COMPONENT_TEXT({ component: tab.comp_name });
      this.tabs.map(item => {
        if (item.tab_name === tab.tab_name) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
      console.log("currentComponentData", this.currentComponentData);
      this.getCurrentComponentData({
        name: tab.comp_name,
        apolloClient: this.$apollo
      });
      debugger;
      this.currentProps = this.currentComponentData;
    }
  },
  props: ["tabs"]
};
</script>

<style lang="scss" scoped>
.title {
  color: black;
  position: relative;
  top: 0;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    color: black;
    text-align: center;
    // background-color: #b3d4fc;
    position: relative;
    width: 100%;
    padding: 0;
    z-index: 1;
    // transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    cursor: pointer;
  }
  li {
    border: 1px 0 1px 1px solid gray;
    padding: 10px;
    font-size: 20px;
    transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .active {
    border-bottom: 2px solid #004ffc;
    color: #004ffc;
    // border-radius: 50px;
    // transition: color 1s ease;
  }
  .tab-content {
    overflow: auto;
    min-height: 85vh;
    max-height: 85vh;
  }
}
</style>


