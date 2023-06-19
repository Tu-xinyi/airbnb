const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  textColor: {
    primaryColor: "#717171",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover{
        box-shadow: 0 1px 1px 1px;
      }
    `,
  },
  text:{
    primaryColor:''
  }
};

export default theme;
