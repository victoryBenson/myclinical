import { theme as antdTheme } from "antd";

export const COLORS = {
  primary: {
    DEFAULT: "#2EB62C",
    dark: "#259224",
    darker: "#1C6D1B",
    deepest: "#124912",
    light: "#D5F0D5",
    lighter: "#E4F6E4",
    soft: "#EDF9ED",
    subtle: "#F5FCF5",
    ultraLight: "#FBFEFB",
  },

  success: {
    DEFAULT: "#16a34a",
    soft: "#dcfce7",
    dark: "#14532d",
  },

  info: {
    DEFAULT: "#2563eb",
    soft: "#dbeafe",
    dark: "#1e3a8a",
  },

  warning: {
    DEFAULT: "#ca8a04",
    soft: "#fef9c3",
    dark: "#713f12",
  },

  error: {
    DEFAULT: "#dc2626",
    soft: "#fee2e2",
    dark: "#7f1d1d",
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
    colorPrimaryHover: "#4CCB4A",
    colorPrimaryActive: COLORS.primary.DEFAULT,

    // Status colors
    colorSuccessBg: COLORS.success.dark,
    colorErrorBg: COLORS.error.dark,
    colorWarningBg: COLORS.warning.dark,
    colorInfoBg: COLORS.info.dark,
  },
};