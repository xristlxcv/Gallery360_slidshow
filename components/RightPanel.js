import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    asset,
    View,
} from 'react-360';
import { connect, imageView } from "../Store";


class RightPanel extends React.Component {


    render() {
        return (
            <View style={styles.panel}>
                <Image style={styles.images} source={asset(this.props.next_image)} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
    images: {
        width: 300,
        height: 600
    }
});

const ConnectedRightPanel = connect(RightPanel);
export default ConnectedRightPanel;