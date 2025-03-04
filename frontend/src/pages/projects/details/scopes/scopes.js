export default {
  data() {
    return {
      search: {
        asset: '',
        type: '',
        scope: '',
        lastUpdate: '',
      },
      columns: [
        { name: 'asset', label: 'Asset Name', align: 'left', field: 'asset' },
        { name: 'type', label: 'Type', align: 'left', field: 'type' },
        { name: 'scope', label: 'Scope', align: 'left', field: 'scope' },
        { name: 'lastUpdate', label: 'Last Update', align: 'left', field: 'lastUpdate' },
        { name: 'actions', label: '', align: 'right' }
      ],
      rows: [
        { asset: 'abc.com', type: 'web', scope: 'in scope', lastUpdate: '02/01/2025' }
      ]
    };
  }
};