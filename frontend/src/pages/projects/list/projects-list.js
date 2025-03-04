import AuditStateIcon from 'components/audit-state-icon'
import Breadcrumb from 'components/breadcrumb'
import ProjectService from '@/services/project'


export default {
    data: () => {
        return {
            projects: [],
            loading: true,
            companies: ['Company 1', 'Company 2', 'Company 3'],
            headersTB: [
              { name: 'name', label: 'Project', field: 'name', sortable: true, align: 'left' },
              { name: 'leader', label: 'Leader', field: 'leader', align: 'center' },
              { 
                name: 'pentesters', 
                label: 'Pentesters', 
                field: 'pentesters', 
                format: val => (Array.isArray(val) ? val.join(', ') : val)
              },
              { name: 'company', label: 'Company', field: 'company' },
              { name: 'client', label: 'Client', field: 'client' },
              { name: 'date', label: 'Date', field: 'date' },
              {name: 'action', label: '', field: 'action', align: 'left', sortable: false},
            ],
            search: {finding: '', name: '', leader: '', pentesters: '', company: '', client: '', date: ''},
            myProjects: false,
            displayConnected: false,
        };
    },
    components: {
        AuditStateIcon,
        Breadcrumb
    },

    mounted: function() {
        this.getProjects();
    },

    methods: {
        getProjects: function() {
            this.loading = false;
            const projects = [{
                _id: '1',
                name: 'Projects 1',
                leader: 'John Doe',
                pentesters: ['Jane Doe', 'Mark Johnson'],
                company: 'ABC Corp',
                client: 'John Doe',
                date: '2020-01-01'
            }, {
                _id: '2',
                name: 'Projects 2',
                leader: 'Jane Doe',
                pentesters: ['Mark Johnson', 'Michael Smith'],
                company: 'XYZ Corp',
                client: 'Jane Doe',
                date: '2020-02-01'
            }, {
                _id: '3',
                name: 'Projects 3',
                leader: 'Mark Johnson',
                pentesters: ['Michael Smith', 'John Doe'],
                company: 'PQR Corp',
                client: 'Mark Johnson',
                date: '2020-03-01'
            }];
            this.projects = projects;
            // ProjectService.getProjects()
            // .then(response => JSON.parse(response.data))
            // .then(data => {
            //     this.projects = data.projects;
            //     this.loading = false;
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
        },
        dblClick: function(evt, row) {
            this.$router.push('/projects/'+row._id);
        }
    }
}