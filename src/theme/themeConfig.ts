import type { ThemeConfig } from "antd";

const PRIMARY = "#2EB62C";

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: PRIMARY,
    borderRadius: 12,
    fontFamily: "Inter, sans-serif",
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: PRIMARY,
    borderRadius: 12,
    fontFamily: "Inter, sans-serif",
    colorBgBase: "#141414",
    colorTextBase: "#ffffff",
  },
};