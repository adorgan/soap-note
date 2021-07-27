export default function Delete({
    id,
    handleSubmit
}) {
    return (
        <>
            <form id={id} onSubmit={handleSubmit}>
                <input
                    name="id"
                    value={id}
                    type="text"
                    readOnly
                />
                <button type="submit">Delete</button>
            </form>
        </>
    );
}
