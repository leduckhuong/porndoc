import Vue from 'vue'

export default {
  getProjects: function() {
    return Vue.prototype.$axios.get('projects')
  },
}