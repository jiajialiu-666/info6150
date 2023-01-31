

function Reorder({onReorder}) {
    return (
        <div className="Reorder">
            <button type ="button"
            button className="button3"
            onClick={()=>onReorder()}>
                Reorder
            </button>
        </div>
    )

}
export default Reorder;