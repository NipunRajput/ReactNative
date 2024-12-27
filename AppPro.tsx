import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isLightMode=useColorScheme()==='dark'
    return(
        <View style={styles.container}>
            <Text style={isLightMode ? styles.whiteText : styles.DarkText}>
                Hello World
            </Text>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    whiteText:{
        color:'#FFFFFF'
    },
    DarkText:{
        color:'#000000'
    }
})


export default AppPro