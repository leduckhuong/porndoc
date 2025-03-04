export default {
  data() {
    return {
      search: {
        scope: '',
        lastUpdate: '',
      },
      columns: [
        { name: 'asset', label: 'Scope', align: 'left', field: 'asset' },
        { name: 'lastUpdate', label: 'Last Update', align: 'left', field: 'lastUpdate' },
        { name: 'actions', label: '', align: 'right' }
      ],
      rows: [
        { asset: '*abc.com', lastUpdate: '02/01/2025' }
      ]
    };
  }
};