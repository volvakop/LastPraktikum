export function Message({ text, important }) {
    return (
        <div>
            {important ? "Important message: " : "Regular message: "}
            {text}
        </div>
    )
   }