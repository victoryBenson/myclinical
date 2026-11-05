import { theme as antdTheme } from "antd";

export const COLORS = {
  primary: {
    DEFAULT: "#00bc7d",
    dark: "#059669",
    darker: "#047857",
    deepest: "#064e3b",
    light: "#d1fae5",
    lighter: "#ecfdf5",
    soft: "#ecfdf5",
    subtle: "#f0fdf4",
    ultraLight: "#f8fafc",
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },

  success: {
    DEFAULT: "#00bc7d",
    soft: "#d1fae5",
    dark: "#065f46",
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },

  info: {
    DEFAULT: "#38bdf8",
    soft: "#e0f2fe",
    dark: "#075985",
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },

  warning: {
    DEFAULT: "#f59e0b",
    soft: "#fef3c7",
    dark: "#92400e",
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  danger: {
    DEFAULT: "#ef4444",
    soft: "#fee2e2",
    dark: "#991b1b",
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  error: {
    DEFAULT: "#ef4444",
    soft: "#fee2e2",
    dark: "#991b1b",
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
};

export const lightTheme = {
  token: {
    colorPrimary: COLORS.primary.DEFAULT,

    colorSuccess: COLORS.success.DEFAULT,
    colorWarning: COLORS.warning.DEFAULT,
    colorError: COLORS.error.DEFAULT,
    colorInfo: COLORS.info.DEFAULT,

    borderRadius: 12,
    fontFamily: "Inter, sans-serif",

    colorBgBase: "#ffffff",
    colorTextBase: "#111827",

    // Primary colors
    colorPrimaryBg: COLORS.primary.soft,
    colorPrimaryBgHover: COLORS.primary.light,
    colorPrimaryBorder: COLORS.primary.light,
    colorPrimaryBorderHover: COLORS.primary.DEFAULT,
    colorPrimaryHover: COLORS.primary.dark,
    colorPrimaryActive: COLORS.primary.darker,

    // Status colors
    colorSuccessBg: COLORS.success.soft,
    colorSuccessBorder: COLORS.success.soft,

    colorErrorBg: COLORS.error.soft,
    colorErrorBorder: COLORS.error.soft,

    colorWarningBg: COLORS.warning.soft,
    colorWarningBorder: COLORS.warning.soft,

    colorInfoBg: COLORS.info.soft,
    colorInfoBorder: COLORS.info.soft,
  },
};

export const darkTheme = {
  algorithm: antdTheme.darkAlgorithm,

  token: {
    colorPrimary: COLORS.primary.DEFAULT,

    colorSuccess: COLORS.success.DEFAULT,
    colorWarning: COLORS.warning.DEFAULT,
    colorError: COLORS.error.DEFAULT,
    colorInfo: COLORS.info.DEFAULT,

    borderRadius: 12,
    fontFamily: "Inter, sans-serif",

    colorBgBase: "#0a0a0a",
    colorTextBase: "#f5f5f5",

    // Primary colors
    colorPrimaryBg: COLORS.primary.deepest,
    colorPrimaryBgHover: COLORS.primary.darker,
    colorPrimaryBorder: COLORS.primary.dark,
    colorPrimaryHover: COLORS.primary[400],
    colorPrimaryActive: COLORS.primary.DEFAULT,

    // Status colors
    colorSuccessBg: COLORS.success.dark,
    colorErrorBg: COLORS.error.dark,
    colorWarningBg: COLORS.warning.dark,
    colorInfoBg: COLORS.info.dark,
  },
};
