const COLORS = {
  red: "#D83C54",
  gray: "#4B4A4D",
  black: "#3D4448",
  white: "#FFFFFF",
  overlay: "#C1BEC0",
  green: "#6AB448",
  yellow: "#FFD95A",
  bg: "#BFDBFE",
  Modal: "#C3CAD3",
};

const SIZES = {
  base: 12,
  icon: 16,
  arrow: 25,
};

const ITEMS = {
  backButton: {
    backgroundColor: COLORS.yellow,
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: "3%",
    marginTop: "8%",
  },

  NextButton: {
    backgroundColor: COLORS.yellow,
    padding: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: "10%",
    marginTop: "5%",
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },

  container: {
    flex: 1,
    backgroundColor: "#BFDBFE",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  title: {
    marginLeft: "30%",
    marginTop: "10%",
    fontWeight: "bold",
    fontSize: 20,
  },

  squareBox: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: COLORS.gray,
    marginLeft: "3%",
    marginTop: "6%",
    borderRadius: 20,
    marginRight: "3%",
  },
  comtitle: {
    marginLeft: "25%",
    marginTop: "10%",
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  img: {
    width: 150,
    height: 120,
    borderRadius: 15,
  },

  imgModal: {
    width: 250,
    height: 170,
    alignSelf: "center",
    padding: 10,
    marginTop: "10%",
    borderRadius: 14,
  },

  comAvailable: {
    marginLeft: "25%",
    marginTop: "10%",
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },

  comAvailableModal: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20,
    color: COLORS.black,
    fontWeight: "500",
  },

  modalContent: {
    width: "100%",
    height: "60%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },

  menuItem: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },

  BoxStat: {
    marginVertical: 4,
  },
  StatBox: {
    padding: 8,
    marginTop: "10%",
    backgroundColor: COLORS.overlay,
    marginHorizontal: "30%",
    borderRadius: 16,
  },

  StatText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  closeButton: {
    fontSize: 18,
    color: COLORS.red,
    textAlign: "center",
    paddingTop: "15%",
  },
};

export { COLORS, SIZES, ITEMS };
