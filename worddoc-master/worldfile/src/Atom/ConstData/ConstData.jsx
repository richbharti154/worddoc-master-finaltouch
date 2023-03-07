
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import style from "../Navbar/Navbar.module.css"


export const textalign = [
  {
    icon: <FormatAlignCenterIcon />,
    action: "justifyCenter",
  },
  {
    icon: <FormatAlignLeftIcon />,
    action:"justifyLeft",
  },
  {
    icon: <FormatAlignRightIcon/>,
    action: "justifyRight",
  }
 
]


export const Emoji = [
  {
    icon:'smile'
  },
  {
    icon:'angry'
  },
  {
    icon:'love'
  },
  {
    icon:'kiss'
  },
  {
    icon:'thumup'
  },
  {
    icon:'thumdown'
  }

]

export const icons = [
    {
      icon: 1,
      action: "1",
    },
    {
      icon: 2,
      action: "2",
    },
    {
      icon: 3,
      action: "3",
    },
    {
      icon: 4,
      action: "4",
    },
    {
      icon:5,
      action: "5",
    },
    {
      icon: 6,
      action: "6",
    },
    {
      icon: 7,
      action: "7",
    },
  ];


  export const textPosition = [
    {
        icon: <UndoIcon   style={{ fontSize: "21px" }}/>,
        action: "undo",
      },
      {
        icon: <RedoIcon  style={{ fontSize: "21px" }}/>,
        action: "redo",
      },
    
    {
      icon: <FormatBoldIcon  style={{ fontSize: "21px" }}/>,
      action: "bold",
    },
    {
      icon: <FormatItalicIcon  style={{ fontSize: "21px" }}/>,
      action: "italic",
    },
    {
      icon: <FormatUnderlinedIcon  style={{ fontSize: "21px" }}/>,
      action: "underline",
    }
    
  ];