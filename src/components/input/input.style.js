import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:335,
    marginRight:20,
    marginLeft:20,
    borderColor: 'gray', 
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 60,
  },
  field:{
    flex: 1,
    flexDirection:'row-reverse',
    justifyContent:'center',
    alignItems:'center',
  },
  fieldInputBody:{
    borderWidth: 0, paddingRight:8
  },
  fieldLabel:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'center',
    marginRight:8,
    width:120,
  },
  fieldInput:{
    flex:2,
    flexDirection:'row-reverse',
    width:500
  },
});
      
  
  
  
    
