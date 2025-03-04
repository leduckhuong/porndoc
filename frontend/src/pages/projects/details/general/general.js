export default {
  data() {
    return {
      project: {
        name: "Project 2",
        language: "Vietnamese",
        company: "Company 1",
        client: "Client 1",
        pentesters: ["Pentester 1", "Pentester 2"],
        description: "Hello, this is a new project",
      },
      pentesterOptions: [
        { label: "Pentester 1", value: "Pentester 1" },
        { label: "Pentester 2", value: "Pentester 2" },
      ],
      isReadOnly: true, // Kiểm soát chế độ chỉnh sửa
    };
  },
};