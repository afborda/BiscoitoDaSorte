import React, {Component} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text, Image} from 'react-native';


class Botao extends Component{

  constructor(props){
    super(props);
    this.state={};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius: 20
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      botaoText:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold'
      }

    });

  }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
            <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class BiscoitoDaSorte extends Component{

  constructor(props){
    super(props);
    this.state = {texto:"Um Texto qualquer...."}
    
    this.frases=["Frase8","Frase7","Frase6","Frase5","Frase4","Frase3","Frase2","Frase1",]
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }

  quebrarBiscoito(){
    let s = this.state;

    let r =  Math.floor(Math.random() * this.frases.length); 

    s.texto = this.frases[r] ;
    this.setState(s)

  }



  render(){
    return(
      <View style={styles.body}>
        <Image source={require('./img/cookie.png')}/>
        <Text style={styles.text} >{this.state.texto}</Text>
            <Botao color="#b59619" text="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 20,
  },
  text:{
  fontSize:17,
  color:'#B59619',
  margin:30,
  fontStyle: 'italic',
  textAlign:'center'
}
})