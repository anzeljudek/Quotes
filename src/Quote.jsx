export default function Quote(props) {
  return (
    <>
      <div className="rounded-sm border-2 border-red-600 p-3 font-medium">
        <p>{props.quote.content}</p>
        <div className="font-bold">
          <p>{props.quote.author}</p>
        </div>
      </div>
    </>
  );
}
