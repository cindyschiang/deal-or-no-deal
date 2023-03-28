function Case(props) {
    return (
        <div className="Case">
            <p>Case {props.index + 1}</p>
            {props.isOpen ? (
                <p>${props.value}</p>
            ) : (
                <button onClick={(e) => props.onClick(props.index)}>
                    {props.userSelecting ? ("Select") : ("Open")}
                </button>
            )}
        </div>
    );
}

export default Case;
