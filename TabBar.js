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
    TouchableOpacity,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TabBar extends Component {
    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,

        tabNames: React.PropTypes.array,
        tabIconNames: React.PropTypes.array,
    };

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }

    componentDidMount() {
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue({value}) {
        console.log('动画值: '+value);
    }

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#FF0000" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={tab}>
				<View style={styles.tabItem}>
					<Icon
						name={this.props.tabIconNames[i]} // 图标
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
    }
}

const styles = StyleSheet.create({
    tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});