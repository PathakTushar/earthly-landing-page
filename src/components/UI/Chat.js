import classes from './Chat.module.css'
import {BsFillChatTextFill} from 'react-icons/bs';
const Chat = ()=>{
    return <button className={classes.chat}><BsFillChatTextFill/> Let's Chat!</button>
}
export default Chat;