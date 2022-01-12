Vue.component("message", {
  props: ["title", "body"],
  data() {
    return {
      isVisible: true,
    };
  },
  template: `
    <article class="message" v-show='isVisible'>
      <div class="message-header">
        <p> {{ title }}</p>
        <button class="delete" aria-label="delete" @click="isVisible = false"></button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
  </article>
  `,
});

Vue.component("modal", {
  props: ["body"],
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>
            {{ body }}
            <slot></slot>
          </p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `,
});

Vue.component("tabs", {
  template: `
    <div>
        <div class="tabs">
          <ul>
            <li v-for='tab in tabs' :class="{ 'is-active': tab.isActive}">
              <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>

        <div class="tabs-details">
          <slot></slot>
        </div>
    </div>
  `,
  data() {
    return { tabs: [] };
  },
  created() {
    console.log(this.$children);
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach( tab => {
        tab.isActive = (tab.name === selectedTab.name);
      })
    }
  }
});

Vue.component("tab", {
  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
  `,
  props: {
    name: { required: true },
    selected: { default: false}
  },
  computed: {
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  data() {
    return{
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected
  },
});

new Vue({
  el: "#root",

  data: {
    showModal: false,
  },
});
