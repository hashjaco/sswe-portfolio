import {Property} from "csstype";
import Position = Property.Position;

export const styles = {
    menuRoot: {
        position: 'relative' as Position,
        zIndex: 9999,
    },
    menuRootButton: {
        backgroundColor: "black",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        margin: "10px 10px",
    },
    subMenuButton: {
        backgroundColor: "black",
        color: "teal",
        borderRadius: "50%",
        width: "40px",
        marginLeft: 5,
        height: "40px",
    }
}
