import Desc from "./Desc"

export function ExpenseItem(props){
    return(
        <div>
            <div>
                <Desc title ={props.title} localExpenditure={props.localExpenditure}></Desc>
                <h3>{props.amount}</h3>
            </div>
            
        </div>
    )
}