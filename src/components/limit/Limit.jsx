export default function Limit({ setLimit }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setLimit(e.target.value);
  };
  return (
    <select defaultValue="10">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
  );
}
