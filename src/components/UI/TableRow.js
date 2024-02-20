export default function TableRow({ userData, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{userData.id}</td>
      <td>{userData.fullName}</td>
      <td>{userData.address}</td>
      <td>{userData.phone}</td>
    </tr>
  );
}
