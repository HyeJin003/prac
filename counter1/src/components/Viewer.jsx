function Viewer({ count }) {
  console.log("count 렌더링", count);
  return (
    <div>
      <span>현재 카운트:</span>
      <h1>{count}</h1>
    </div>
  );
}

export default Viewer;
