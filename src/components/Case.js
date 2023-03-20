function Case(props) {
  return (
    <div className="Case">
        <p>Case {props.index + 1}</p>
        <p>{props.value}</p>
    </div>
  );
}

export default Case;
