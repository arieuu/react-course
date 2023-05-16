interface Props {
    text: string
    onClickButton ():void
    color?: "primary" | "danger" | "warning"
}

function Button({text, onClickButton, color="primary"}: Props) {
    return(
        <button className={"btn btn-" + color} onClick={onClickButton}> {text} </button>
    )

}

export default Button;