import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  homeCont: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20, 
    right: 20,
    backgroundColor: '#4B53B4',
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newCont:{
    flex: 1,
    position: 'relative',
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  cardContainer: {
    width: '95%',
    maxWidht: 350,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 16,
    marginBottom: 24,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 35, 
    color: '#000',
    marginBottom: 8,
    textAlign: 'left', 
  },
  dueDate: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
  },
  btnSm: {
    padding: 10,
    borderRadius: 8,
    width: 48, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    color: '#000',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 15, 
    padding: 10,
    width: 260,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, 
    left: 10, 
  },

  checkbox: {
    marginRight: 8,
  },

  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    fontSize: 25,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#4B53B4',
    width: 260,
  },
  menuButton:{
    position: 'absolute'

  },
  containerNew: {
    flex: 1,
    paddingTop: 24,
    alignItems: 'center',
    backgroundColor: 'white'
},
footer: {
    width: 288,
    bottom: 48,
    position: 'fixed',
},
underline: {
  height: 1,
  width: '100%', 
  backgroundColor: 'black', 
},
checkBoxStyle: {
  alignSelf: 'flex-start', 
  marginLeft: 10,
  marginBottom: 10,
},
taskContent: {
  flexDirection: 'row',
  alignItems: 'center',
},
taskTextContainer: {
  flex: 1, 
  marginLeft: 10,
},

editBtn: {
    width: 116,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#4B53B4',
    marginLeft: 32
},
cancelBtn: {
    width: 116,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'red',
},
  textButton: {
    fontSize: 20,
    color: "#FFF",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  top: {
    marginBottom: 50,
    marginTop: -30,
    alignItems: 'center',
  },
  add: {
    position: 'absolute',
    bottom: 100,
    left: 100,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4B53B4',
    textAlign: 'center',
  },
  textAdd: {
    color: '#FFF',
    fontSize: 40,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  btnMd: {
    width: 116,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  txtAdd: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Arial'
  }
});
