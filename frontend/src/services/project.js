import Vue from 'vue'

export default {
  getProjects: function(filters) {
    var params = {}
    if (filters) {
      if (filters.findingTitle)
        params.findingTitle = filters.findingTitle;
      if (filters.type)
        params.type = filters.type
    }
    return Vue.prototype.$axios.get('projects', {params: params})
  },
}