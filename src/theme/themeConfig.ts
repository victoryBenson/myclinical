import { theme as antdTheme } from "antd";

export const COLORS = {
  primary: "#001A00",

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

// export const COLORS = {
//   primary: '#001A00',

//   success: '#16a34a',
//   successSoft: '#dcfce7',
//   successDark: '#14532d',

//   info: '#2563eb',
//   infoSoft: '#dbeafe',
//   infoDark: '#1e3a8a',

//   warning: '#ca8a04',
//   warningSoft: '#fef9c3',
//   warningDark: '#713f12',

//   error: '#dc2626',
//   errorSoft: '#fee2e2',
//   errorDark: '#7f1d1d',
// };


// export const lightTheme = {
//   token: {
//     colorPrimary: COLORS.primary,

//     colorSuccess: COLORS.success,
//     colorWarning: COLORS.warning,
//     colorError: COLORS.error,
//     colorInfo: COLORS.info,

//     borderRadius: 12,
//     fontFamily: "Inter, sans-serif",
//     colorBgBase: '#ffffff',
//     colorTextBase: '#111827',
//   },
// };

// export const darkTheme = {
//   algorithm: antdTheme.darkAlgorithm,
//   token: {
//     colorPrimary: COLORS.primary,

//     colorSuccess: COLORS.success,
//     colorWarning: COLORS.warning,
//     colorError: COLORS.error,
//     colorInfo: COLORS.info,

//     borderRadius: 12,
//     fontFamily: "Inter, sans-serif",
//     colorBgBase: '#0a0a0a',
//     colorTextBase: '#f5f5f5',
//   },
// };

export const lightTheme = {
  token: {
    colorPrimary: COLORS.primary,

    colorSuccess: COLORS.success.DEFAULT,
    colorWarning: COLORS.warning.DEFAULT,
    colorError: COLORS.error.DEFAULT,
    colorInfo: COLORS.info.DEFAULT,

    borderRadius: 12,
    fontFamily: "Inter, sans-serif",

    colorBgBase: "#ffffff",
    colorTextBase: "#111827",

    // 👇 IMPORTANT ADDITIONS (for full control)
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
    colorPrimary: COLORS.primary,

    colorSuccess: COLORS.success.DEFAULT,
    colorWarning: COLORS.warning.DEFAULT,
    colorError: COLORS.error.DEFAULT,
    colorInfo: COLORS.info.DEFAULT,

    borderRadius: 12,
    fontFamily: "Inter, sans-serif",

    colorBgBase: "#0a0a0a",
    colorTextBase: "#f5f5f5",

    colorSuccessBg: COLORS.success.dark,
    colorErrorBg: COLORS.error.dark,
    colorWarningBg: COLORS.warning.dark,
    colorInfoBg: COLORS.info.dark,
  },
};