export default function Delete({
    id,
    handleSubmit
}) {
    return (
        <>
            <form className="delete-btn" id={id} onSubmit={handleSubmit}>
                <input
                    name="id"
                    value={id}
                    type="text"
                    readOnly
                    hidden
                />
                <button type="submit">Delete</button>
            </form>
        </>
    );
}
