export function ValueDisplay(props) {
    return (
      <div className="ValueDisplay" style={{order: Math.floor(props.value)}}>
          <p>${props.value}</p>
      </div>
    );
  }
