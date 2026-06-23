import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "4px", 
          medium: "6px", 
          large: "8px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            "background": {
              "DEFAULT": "#FFFFFF"
            },
            "content1": {
              "DEFAULT": "#FFFFFF",
              "foreground": "#0A2342"
            },
            "content2": {
              "DEFAULT": "#F8F9FA",
              "foreground": "#0A2342"
            },
            "content3": {
              "DEFAULT": "#F1F3F5",
              "foreground": "#0A2342"
            },
            "content4": {
              "DEFAULT": "#E9ECEF",
              "foreground": "#0A2342"
            },
            "divider": {
              "DEFAULT": "rgba(10, 35, 66, 0.12)"
            },
            "focus": {
              "DEFAULT": "#0A2342"
            },
            "foreground": {
              "50": "#F8F9FA",
              "100": "#F1F3F5",
              "200": "#E9ECEF",
              "300": "#DEE2E6",
              "400": "#CED4DA",
              "500": "#ADB5BD",
              "600": "#6C757D",
              "700": "#495057",
              "800": "#343A40",
              "900": "#212529",
              "DEFAULT": "#0A2342"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#FEE7EF",
              "100": "#FDD0DF",
              "200": "#FAA0BF",
              "300": "#F871A0",
              "400": "#F54180",
              "500": "#F31260",
              "600": "#C20E4D",
              "700": "#920B3A",
              "800": "#610726",
              "900": "#310413",
              "DEFAULT": "#C20E4D",
              "foreground": "#FFFFFF"
            },
            "default": {
              "50": "#F8F9FA",
              "100": "#F1F3F5",
              "200": "#E9ECEF",
              "300": "#DEE2E6",
              "400": "#CED4DA",
              "500": "#ADB5BD",
              "600": "#6C757D",
              "700": "#495057",
              "800": "#343A40",
              "900": "#212529",
              "DEFAULT": "#6C757D",
              "foreground": "#FFFFFF"
            },
            "primary": {
              "50": "#E6EDF5",
              "100": "#CCDAEB",
              "200": "#99B5D7",
              "300": "#6691C3",
              "400": "#336CAF",
              "500": "#0A2342",
              "600": "#081C35",
              "700": "#061528",
              "800": "#040E1B",
              "900": "#02070E",
              "DEFAULT": "#0A2342",
              "foreground": "#FFFFFF"
            },
            "secondary": {
              "50": "#FBF6E9",
              "100": "#F7EDD3",
              "200": "#EFDBA7",
              "300": "#E7C97B",
              "400": "#DFB74F",
              "500": "#D5A021",
              "600": "#AA801B",
              "700": "#806014",
              "800": "#55400D",
              "900": "#2B2007",
              "DEFAULT": "#D5A021",
              "foreground": "#000000"
            },
            "success": {
              "50": "#E8FAF0",
              "100": "#D1F4E0",
              "200": "#A2E9C1",
              "300": "#74DFA2",
              "400": "#45D483",
              "500": "#17C964",
              "600": "#12A150",
              "700": "#0E793C",
              "800": "#095028",
              "900": "#052814",
              "DEFAULT": "#17C964",
              "foreground": "#FFFFFF"
            },
            "warning": {
              "50": "#FEFCE8",
              "100": "#FDEDD3",
              "200": "#FBDBA7",
              "300": "#F9C97C",
              "400": "#F7B750",
              "500": "#F5A524",
              "600": "#C4841D",
              "700": "#936316",
              "800": "#62420E",
              "900": "#312107",
              "DEFAULT": "#F5A524",
              "foreground": "#000000"
            }
          }
        },
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#0F172A"
            },
            "content1": {
              "DEFAULT": "#1E293B",
              "foreground": "#F8FAFC"
            },
            "content2": {
              "DEFAULT": "#293548",
              "foreground": "#F8FAFC"
            },
            "content3": {
              "DEFAULT": "#334155",
              "foreground": "#F8FAFC"
            },
            "content4": {
              "DEFAULT": "#475569",
              "foreground": "#F8FAFC"
            },
            "divider": {
              "DEFAULT": "rgba(248, 250, 252, 0.12)"
            },
            "focus": {
              "DEFAULT": "#94A3B8"
            },
            "foreground": {
              "50": "#1E293B",
              "100": "#293548",
              "200": "#334155",
              "300": "#475569",
              "400": "#64748B",
              "500": "#94A3B8",
              "600": "#CBD5E1",
              "700": "#E2E8F0",
              "800": "#F1F5F9",
              "900": "#F8FAFC",
              "DEFAULT": "#F8FAFC"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#310413",
              "100": "#610726",
              "200": "#920B3A",
              "300": "#C20E4D",
              "400": "#F31260",
              "500": "#F54180",
              "600": "#F871A0",
              "700": "#FAA0BF",
              "800": "#FDD0DF",
              "900": "#FEE7EF",
              "DEFAULT": "#F31260",
              "foreground": "#FFFFFF"
            },
            "default": {
              "50": "#1E293B",
              "100": "#293548",
              "200": "#334155",
              "300": "#475569",
              "400": "#64748B",
              "500": "#94A3B8",
              "600": "#CBD5E1",
              "700": "#E2E8F0",
              "800": "#F1F5F9",
              "900": "#F8FAFC",
              "DEFAULT": "#94A3B8",
              "foreground": "#1E293B"
            },
            "primary": {
              "50": "#02070E",
              "100": "#040E1B",
              "200": "#061528",
              "300": "#081C35",
              "400": "#0A2342",
              "500": "#336CAF",
              "600": "#6691C3",
              "700": "#99B5D7",
              "800": "#CCDAEB",
              "900": "#E6EDF5",
              "DEFAULT": "#336CAF",
              "foreground": "#FFFFFF"
            },
            "secondary": {
              "50": "#2B2007",
              "100": "#55400D",
              "200": "#806014",
              "300": "#AA801B",
              "400": "#D5A021",
              "500": "#DFB74F",
              "600": "#E7C97B",
              "700": "#EFDBA7",
              "800": "#F7EDD3",
              "900": "#FBF6E9",
              "DEFAULT": "#DFB74F",
              "foreground": "#000000"
            },
            "success": {
              "50": "#052814",
              "100": "#095028",
              "200": "#0E793C",
              "300": "#12A150",
              "400": "#17C964",
              "500": "#45D483",
              "600": "#74DFA2",
              "700": "#A2E9C1",
              "800": "#D1F4E0",
              "900": "#E8FAF0",
              "DEFAULT": "#17C964",
              "foreground": "#FFFFFF"
            },
            "warning": {
              "50": "#312107",
              "100": "#62420E",
              "200": "#936316",
              "300": "#C4841D",
              "400": "#F5A524",
              "500": "#F7B750",
              "600": "#F9C97C",
              "700": "#FBDBA7",
              "800": "#FDEDD3",
              "900": "#FEFCE8",
              "DEFAULT": "#F5A524",
              "foreground": "#000000"
            }
          }
        }
      }
    })
  ]
}
