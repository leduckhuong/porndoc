export default {
  data() {
    return {
      search: {
        file: '',
        type: '',
        createAt: '',
      },
      columns: [
        { name: 'file', label: 'File Name', align: 'left', field: 'file' },
        { name: 'type', label: 'Type', align: 'left', field: 'type' },
        { name: 'createAt', label: 'Create At', align: 'left', field: 'createAt' },
        { name: 'actions', label: '', align: 'right' }
      ],
      rows: [
        { file: 'abc.com', type: 'txt', createAt: '02/01/2025' }
      ]
    };
  }
};