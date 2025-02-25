export default {
    data: () => {
        return {
            projects: []
        }
    },

    components: {
        ProjectStateIcon,
        Breadcrumb
    },

    mounted: function() {
        this.search.finding = this.$route.params.finding;

        if (this.UserService.isAllowed('projects:users-connected'))
            this.visibleColumns.push('connected')
        if (this.$settings.reviews.enabled)
            this.visibleColumns.push('reviews')

        this.getProjects();
    },

    computed: {
        modalProjectTypes: function() {
            return this.projectTypes.filter(type => type.stage === this.currentProject.type)
        }
    },

    methods: {
        getProjects: function() {
            this.loading = true
            ProjectService.getProjects({findingTitle: this.search.finding})
            .then((data) => {
                this.projects = data.data.datas
                this.loading = false
            })
            .catch((err) => {
                console.log(err)
            })
        },
    }
}