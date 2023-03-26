export function ValueDisplay(props) {
    return (
        <div
            className="ValueDisplay"
            style={{ order: Math.floor(props.value) }}
        >
            <p className={`${props.isOpen ? "value-case-open" : ""}`}>
                ${props.value}
            </p>
        </div>
    );
}
