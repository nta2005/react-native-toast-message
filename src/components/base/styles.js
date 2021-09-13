import { StyleSheet } from 'react-native';
import colors from '../../colors';

// export const HEIGHT = 60;
export const HEIGHT = 61;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    //height: HEIGHT,
    //width: '90%',
    //borderRadius: 6,
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 20,
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 12
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: colors.alto
  },
  leadingIconContainer: {
    //width: 50,
    //justifyContent: 'center',
    //alignItems: 'center'
    marginTop: -32,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // in case of rtl the text will start from the right
    paddingLeft: 12
  },
  trailingIconContainer: {
    //width: 40,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leadingIcon: {
    //width: 20,
    //height: 20
    width: 40,
    height: 40
  },
  trailingIcon: {
    //width: 9,
    //height: 9
    width: 20,
    height: 20
  },
  text1: {
    //fontSize: 12,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3
  },
  text2: {
    //fontSize: 10,
    //color: colors.dustyGray
    fontSize: 12,
    color: 'white'
  }
});
