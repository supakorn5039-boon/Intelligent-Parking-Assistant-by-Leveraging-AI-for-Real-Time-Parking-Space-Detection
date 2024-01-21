const COLORS = {
  red: "#D83C54",
  gray: "#4B4A4D",
  black: "#3D4448",
  white: "#FFFFFF",
  overlay: "#C1BEC0",
  green: "#6AB448",
  yellow: "#FFD95A",
  bg: "#B5C0EF",
  Modal: "#C3CAD3",
};

const SIZES = {
  base: 12,
  icon: 16,
  font: 16,
  arrow: 25,
};

const ITEMS = {
  backButton: {
    backgroundColor: COLORS.yellow,
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 16,
    marginTop: 20,
  },

  NextButton: {
    backgroundColor: COLORS.yellow,
    padding: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 120,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#B5C0EF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  title: {
    marginLeft: 120,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
  sq: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.gray,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  img: {
    width: 150,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  imgDes: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 100,
  },
  com: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  pro: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  survey: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  comA: {
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  comAD: {
    marginLeft: 150,
    marginBottom: 30,
    fontSize: 18,
    color: COLORS.black,
    fontWeight: "500",
  },

  des: {
    marginLeft: 70,
    color: "white",
  },
  sur: {
    marginLeft: 70,
    marginBottom: 45,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },

  modalContent: {
    width: "100%",
    height: "60%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  bar: {
    alignItems: "center",
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },

  closeButton: {
    fontSize: 18,
    color: COLORS.red,
    marginTop: 80,
    textAlign: "center",
  },
};

export { COLORS, SIZES, ITEMS };
