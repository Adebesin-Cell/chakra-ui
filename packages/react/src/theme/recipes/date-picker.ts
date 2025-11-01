import { datePickerAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"

export const datePickerSlotRecipe = defineSlotRecipe({
  slots: datePickerAnatomy.keys(),
  className: "date-picker",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
    },

    label: {
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5",
      },
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
      bg: "transparent",
      px: "3",
      height: "10",
      borderWidth: "1px",
      borderRadius: "l2",
      transitionProperty: "border-color, box-shadow",
      transitionDuration: "normal",
      _focus: {
        borderColor: "colorPalette.focusRing",
        boxShadow: "0 0 0 1px var(--colors-color-palette-focus-ring)",
      },
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed",
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
      transitionProperty: "background, border-color",
      transitionDuration: "normal",
      _hover: {
        bg: "bg.subtle",
      },
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed",
      },
    },

    clearTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
      bg: "bg.panel",
      borderRadius: "l3",
      borderWidth: "1px",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      gap: "3",
      p: "4",
      minW: "320px",
      _open: {
        animation: "fade-in",
      },
      _closed: {
        animation: "fade-out",
      },
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
      gap: "2",
    },

    viewTrigger: {
      fontWeight: "medium",
      textStyle: "sm",
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
        bg: "bg.subtle",
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
        bg: "bg.subtle",
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
      transitionProperty: "background, color",
      transitionDuration: "fast",
      _hover: {
        bg: "bg.subtle",
      },
      _selected: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        fontWeight: "medium",
      },
      _today: {
        borderWidth: "1px",
        borderColor: "border",
      },
      _disabled: {
        opacity: "0.4",
        cursor: "not-allowed",
      },
    },

    monthSelect: {
      appearance: "none",
      px: "2",
      py: "1",
      borderRadius: "l2",
      borderWidth: "1px",
      cursor: "pointer",
      textStyle: "sm",
      _focus: {
        outlineWidth: "2px",
        outlineColor: "colorPalette.focusRing",
      },
    },

    yearSelect: {
      appearance: "none",
      px: "2",
      py: "1",
      borderRadius: "l2",
      borderWidth: "1px",
      cursor: "pointer",
      textStyle: "sm",
      _focus: {
        outlineWidth: "2px",
        outlineColor: "colorPalette.focusRing",
      },
    },

    presetTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: "3",
      height: "8",
      borderRadius: "l2",
      cursor: "pointer",
      textStyle: "sm",
      _hover: {
        bg: "bg.subtle",
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          gap: "1",
        },
        input: {
          height: "8",
          px: "2.5",
          textStyle: "sm",
        },
        trigger: {
          height: "8",
          px: "2.5",
        },
        content: {
          p: "3",
          minW: "280px",
        },
      },
      md: {
        root: {
          gap: "1.5",
        },
        input: {
          height: "10",
          px: "3",
          textStyle: "sm",
        },
        trigger: {
          height: "10",
          px: "3",
        },
        content: {
          p: "4",
          minW: "320px",
        },
      },
      lg: {
        root: {
          gap: "2",
        },
        input: {
          height: "12",
          px: "4",
          textStyle: "md",
        },
        trigger: {
          height: "12",
          px: "4",
        },
        content: {
          p: "5",
          minW: "360px",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
})
