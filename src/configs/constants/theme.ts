export const THEME = {
  token: {
    fontFamily: "Roboto, sans-serif",

    // Primary Brand
    colorPrimary: "#64b0f2", // toska seperti di gambar
    colorInfo: "#64b0f2", // biru accent
    colorSuccess: "#2ecc71",
    colorWarning: "#f1c40f",
    colorError: "#e74c3c",

    // Background
    colorBgLayout: "#f5f7fb",
    colorBgContainer: "#ffffff",

    // Text
    colorTextBase: "#2f3749",
    colorTextSecondary: "#6b7280",
  },

  components: {
    Layout: {
      siderBg: "#2f3749",
      headerBg: "#3c4458",
    },

    Menu: {
      darkItemBg: "#2f3749",

      // selected menu
      itemSelectedBg: "#eff7fe",
      itemSelectedColor: "#64b0f2",

      // hover
      itemHoverBg: "#eff7fe",
      itemHoverColor: "#64b0f2",
    },

    Card: {
      borderRadiusLG: 12,
    },

    Table: {
      headerBg: "#f8fafc",
    },
    Button: {
      colorPrimary: "#64b0f2",
      colorPrimaryHover: "#5b9fdb",
      colorPrimaryActive: "#5da3e0",

      borderRadius: 8,
    },

    Dropdown: {
      colorBgElevated: "#FFF",
      controlItemBgHover: "#eff7fe",
      controlItemBgActive: "#eff7fe",
    },
  },
};
