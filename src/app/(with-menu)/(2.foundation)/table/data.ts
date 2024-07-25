export const dataSource = [...Array(100)].map((_, index) => ({
  key: index,
  name: `Brian No.${index + 1}`,
  age: 38,
  address: "10 Downing Street",
}));

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
