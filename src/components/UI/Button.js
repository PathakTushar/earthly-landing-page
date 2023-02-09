import classes from './Button.module.css'
const Button = (props)=>{
    return <button className={`${props.active?classes.activeButton:classes.inactiveButton} ${classes.cartButton}`}>{props.children}</button>
}
export default Button;