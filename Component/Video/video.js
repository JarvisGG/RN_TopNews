/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Platform,
    ListView,
    TouchableHighlight,
    View,
    Image
} from 'react-native';

import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Mock from 'mockjs';
import config from '../common/config';
import request from '../common/request';

const {width,height} = Dimensions.get('window');

export default class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1, row2)=> row1 !== row2
      }),
    }
    // this.state = {
    //   dataSource:this.state.dataSource.cloneWithRows(
    //     ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11'])
    // };
  }

  componentWillMount() {
    this.dsfetchData();
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    console.log('封装的异步网络请求');
    request.get(config.api.base + config.api.list, {
      accessToken: 'test'
    }).then(
      (data) => {
        if(data.success) {
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
              data.data
            ),
          });
        }
      }
    ).catch(
      (err) => {
        console.log('err' + err);
      }
    )
  }

  dsfetchData(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                [
                    {
                        "_id":"450000201111076177","thumb":"http://dummyimage.com/1280x720/a99343)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }
                    ,
                    {
                        "_id":"410000201207096642","thumb":"http://dummyimage.com/1280x720/afebb9)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }
                    ,
                    {
                        "_id":"210000201211100360","thumb":"http://dummyimage.com/1280x720/4564d3)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }
                ]

            ),
        });
    }

  _renderRow = (rowData) => {
    return (
      <TouchableHighlight>
        <View style={styles.item}>
          <Text style={styles.title}>{rowData.title}</Text>
          <Image style={styles.thumb} source={{uri:rowData.thumb}}>
            <Icon
              name='ios-play'
              size={28}
              style={styles.play} />
          </Image>

          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon
                name='ios-heart-outline'
                size={28}
                style={styles.up} />
              <Text style={styles.handleText}>点赞</Text>
            </View>

            <View style={styles.handleBox}>
              <Icon
                name='ios-chatbubbles'
                size={28}
                style={styles.commentIcon} />
              <Text style={styles.handleText}>评论</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.headerText}>
            视频列表
          </Text>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
          style={styles.listView}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    paddingTop:25,
    paddingBottom:12,
    backgroundColor:'#FF0000'
  },
  headerText: {
    fontSize:16,
    fontWeight:'600',
    textAlign:'center',
    color:'#fff'
  },
  listView: {
    paddingTop:53,
    backgroundColor:'#F5FCFF',
  },
  item:{
        width:width,
        marginBottom:10,
        backgroundColor:'white'
    },


    title:{
        fontSize:18,
        padding:10,
        color:'#333'
    },

    thumb:{
        width:width,
        height:width*0.56,
        resizeMode:'cover'
    },

    play:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:23,
        color:'#ed7b66'
    },


    itemFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee'
    },

    handleBox:{
        padding:10,
        flexDirection:'row',
        width: width/2 - 0.5,
        justifyContent:'center',
        backgroundColor:'white',
    },
    up:{

        fontSize:22,
        color:'#333'
    },
    commentIcon:{
        fontSize:22,
        color:'#333'
    },
    handleText:{
        fontSize:18,
        color:'#333',
        paddingLeft:12,
    },
});

