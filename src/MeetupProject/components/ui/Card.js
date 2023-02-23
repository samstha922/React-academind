import classes from "./Card.module.css"
const Card = (props) => {
    return (
    <div className={classes.card}>
        {/* props.children: special prop that every component receives by default and holds all the contents in betn opening and closing */}
        {props.children}
    </div>
    )

}

export default Card; 