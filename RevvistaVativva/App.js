import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';

class App extends React.Component
{
    render(){
        return(
            <View style={ styles.container }>
               <View style={{ flex:1, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: '#832a0d' }}></View>
                <View style={{ flex: 1, backgroundColor: '#f4a460' }}></View>
                <View style={{ flex: 1, backgroundColor: '#bc8f8f' }}></View>
                <View style={{ flex: 1, backgroundColor: '#cd853f' }}></View>
               </View>
               
               <View style={ styles.titleContainer }>
                <Text style={{ fontSize: 26 }}>Revvista Nativva</Text>
               </View>
               
               <View style={ styles.mainContainer }>
                <View style={{ flex:3, backgroundColor:'#f8ecc2' }}>
                    <Text style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec semper metus. 
                    Duis purus erat, pulvinar quis lacinia ut, facilisis non diam. 
                    Quisque blandit dui ac libero tempus finibus.
                    Suspendisse id lorem sit amet quam auctor hendrerit sit amet tincidunt ante. 
                    Morbi eget bibendum erat, tincidunt dictum elit.</Text>
                </View>
                <Image
                    source={ require('./images/Burlwood.png') }
                    style={{ flex:2, width:undefined, height:undefined }}
                />
               </View>
               
               <View style={ styles.secondaryContainer }>
                <View style={{ flex:1, borderRightWidth:3 }}>
                    <View style={{ alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ fontSize: 20 }}>Title 1</Text>
                    </View>
                    <View style={{ flex:1, flexDirection:'row' }}>
                        <Image
                            source={ require('./images/Leopard.png') }
                            style={{ flex:1, width:undefined, height:undefined }}
                        />
                        <View style={{ flex:1, paddingLeft: 6 }}>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec  
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex:1 }}>
                        <Text>
                        fringilla finibus odio ac egestas. Mauris sodales nibh nunc, in porta urna commodo convallis.Suspendisse sit amet congue leo. Fusce...
                        </Text>
                    </View>
                </View>

                <View style={{ flex:1, borderLeftWidth:3 }}>
                    <View style={{ alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ fontSize: 20 }}>Title 2</Text>
                    </View>
                    <View style={{ flex:1 }}>
                        <Text>
                        fringilla finibus odio ac egestas. Mauris sodales nibh nunc, in porta urna commodo convallis.Suspendisse sit amet congue leo. Fusce...
                        </Text>
                    </View>
                    <View style={{ flex:1, flexDirection:'row' }}>
                        <Image
                            source={ require('./images/Sky.png') }
                            style={{ flex:1, width:undefined, height:undefined }}
                        />
                        <View style={{ flex:1, paddingLeft: 6 }}>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec  
                            </Text>
                        </View>
                    </View>
                </View>
               </View>
               
               <View style={{ flex:1, backgroundColor:'#d3d3d3', justifyContent:'center', alignItems:'center' }}>
                <View>
                    <Text style={{ fontSize:16 }}>
                        Copyrigth (c) 2018 Revvista Nativva
                    </Text>
                </View>   
               </View>
            </View>
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: { 
        flex:1, 
        backgroundColor:'#c19a6b',
        padding: 13,
        marginTop: STATUSBAR_HEIGHT,
    },
    titleContainer:{ 
        flex:1, 
        backgroundColor:'#f8ecc2', 
        alignItems:'center', 
        justifyContent:'center', 
        borderBottomWidth:6 
    },
    mainContainer:{ 
        flex:6, 
        backgroundColor:'#f8ecc2', 
        flexDirection:'row', 
        borderBottomWidth:6, 
        padding:6  
    },
    secondaryContainer:{ 
        flex:7, 
        backgroundColor:'#f8ecc2', 
        borderBottomWidth:6, 
        flexDirection:'row',
        paddingLeft: 6
    }
});

export default App;