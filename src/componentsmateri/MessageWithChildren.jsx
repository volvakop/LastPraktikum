export function MessageWithChildren({ children, important = false }) {
    return (
    <div>
    {important ? "Important message: " : "Regular message: "}
    {children}
    </div>
    )
   }
   