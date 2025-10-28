import { defineSlotRecipe } from "../def"

export const datePickerSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "label",
    "control",
    "input",
    "trigger",
    "clearTrigger",
    "positioner",
    "content",
    "view",
    "viewControl",
    "viewTrigger",
    "prevTrigger",
    "nextTrigger",
    "rangeText",
    "table",
    "tableHead",
    "tableHeader",
    "tableBody",
    "tableRow",
    "tableCell",
    "tableCellTrigger",
    "monthSelect",
    "yearSelect",
    "presetTrigger",
  ],
  className: "date-picker",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    label: {
      fontWeight: "medium",
      color: "fg",
      textStyle: "sm",
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "2",
    },
    input: {
      flex: "1",
      minWidth: "0",
      outline: "none",
      px: "3",
      height: "10",
      borderWidth: "1px",
      borderRadius: "l2",
      bg: "bg",
      _focus: {
        borderColor: "colorPalette.solid",
        boxShadow: "0 0 0 1px var(--colors-color-palette-solid)",
      },
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: "3",
      height: "10",
      borderWidth: "1px",
      borderRadius: "l2",
      bg: "bg",
      cursor: "pointer",
      _hover: {
        bg: "bg.muted",
      },
    },
    clearTrigger: {
      cursor: "pointer",
      color: "fg.muted",
      _hover: {
        color: "fg",
      },
    },
    positioner: {
      zIndex: "dropdown",
    },
    content: {
      bg: "bg",
      borderRadius: "l3",
      borderWidth: "1px",
      boxShadow: "lg",
      p: "4",
      minW: "320px",
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: "3",
    },
    viewControl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    viewTrigger: {
      fontWeight: "medium",
      cursor: "pointer",
      _hover: {
        color: "colorPalette.solid",
      },
    },
    prevTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "8",
      height: "8",
      borderRadius: "l2",
      cursor: "pointer",
      _hover: {
        bg: "bg.muted",
      },
    },
    nextTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "8",
      height: "8",
      borderRadius: "l2",
      cursor: "pointer",
      _hover: {
        bg: "bg.muted",
      },
    },
    rangeText: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    table: {
      width: "full",
      borderCollapse: "collapse",
    },
    tableHead: {},
    tableHeader: {
      textAlign: "center",
      textStyle: "xs",
      fontWeight: "medium",
      color: "fg.muted",
      height: "8",
    },
    tableBody: {},
    tableRow: {},
    tableCell: {
      textAlign: "center",
      p: "0.5",
    },
    tableCellTrigger: {
      width: "full",
      height: "8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "l2",
      cursor: "pointer",
      textStyle: "sm",
      _hover: {
        bg: "bg.muted",
      },
      _selected: {
        bg: "colorPalette.solid",
        color: "colorPalette.fg",
        fontWeight: "medium",
      },
      _today: {
        borderWidth: "1px",
      },
      _disabled: {
        opacity: "0.4",
        cursor: "not-allowed",
      },
      _outside: {
        color: "fg.muted",
      },
    },
    monthSelect: {
      px: "2",
      py: "1",
      borderRadius: "l2",
      borderWidth: "1px",
      cursor: "pointer",
      textStyle: "sm",
    },
    yearSelect: {
      px: "2",
      py: "1",
      borderRadius: "l2",
      borderWidth: "1px",
      cursor: "pointer",
      textStyle: "sm",
    },
    presetTrigger: {
      px: "3",
      height: "8",
      borderRadius: "l2",
      cursor: "pointer",
      textStyle: "sm",
      _hover: {
        bg: "bg.muted",
      },
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          height: "8",
          px: "2.5",
        },
        trigger: {
          height: "8",
          px: "2.5",
        },
      },
      md: {
        input: {
          height: "10",
          px: "3",
        },
        trigger: {
          height: "10",
          px: "3",
        },
      },
      lg: {
        input: {
          height: "12",
          px: "4",
        },
        trigger: {
          height: "12",
          px: "4",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
