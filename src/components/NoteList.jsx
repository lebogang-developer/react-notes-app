const NoteList = ({ notes }) => {
  // Checkif there are notes to display
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes To Display!</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold mb-3">{note.title}</h3>
          <p className="text-sm text-gray-600">
            <strong>Category: </strong> {note.category}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Priority: </strong> {note.priority}
          </p>
          <p className="mt-2 text-gray-800">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
