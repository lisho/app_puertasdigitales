import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";


const defaultToolbarStyles = {
    iconButton: {
    },
  };
  
const EditButton = ({handleEditar, dataIndex, rowIndex}) => {
  
    return (
        <Tooltip title={"Editar"}>
        <IconButton /* className={classes.iconButton} */ onClick={() => handleEditar(dataIndex, rowIndex)}>
          <EditIcon /* className={classes.deleteIcon} */ />
        </IconButton>
      </Tooltip>
    );
}

export default withStyles(defaultToolbarStyles, { name: "EditButton" })(EditButton);