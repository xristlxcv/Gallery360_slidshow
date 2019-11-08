import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    asset,
    Text,
    View,
    VrButton,
    Environment
} from 'react-360';
import { connect, imageView, nextImage } from "../Store";
class slideshow extends React.Component {
    state = {
        buttonId: 1
    }
    nextPhoto = () => {
        if (this.state.buttonId <= 6) {
            this.setState({ buttonId: ++this.state.buttonId })
            imageView(this.state.buttonId);
        }
    };
    previousPhoto = () => {
        if (this.state.buttonId > 1) {
            this.setState({ buttonId: --this.state.buttonId })
            imageView(this.state.buttonId);
        }
    };
    okButton = () => {
        imageView(1);
        this.setState({ buttonId: 1 })
        this.setState({ decision: true })
    }
    stopButton = () => {
        imageView(6);
        this.setState({ buttonId: 6 })
    }
    enterInside = () => {
        if (this.state.buttonId === 1) {
            Environment.setBackgroundImage(
                asset('egypt.jpg'),
                { format: '2D' }
            );
        }
        if (this.state.buttonId === 2) {
            Environment.setBackgroundImage(
                asset('panama.jpg'),
                { format: '2D' }
            );
        }
        if (this.state.buttonId === 3) {
            Environment.setBackgroundImage(
                asset('barcelona.jpg'),
                { format: '2D' }
            );
        }
        if (this.state.buttonId === 4) {
            Environment.setBackgroundImage(
                asset('moscow.jpg'),
                { format: '2D' }
            );
        }
        if (this.state.buttonId === 5) {
            Environment.setBackgroundImage(
                asset('vilnious.jpg'),
                { format: '2D' }
            );
        }
        if (this.state.buttonId === 6) {
            Environment.setBackgroundImage(
                asset('prague.jpg'),
                { format: '2D' }
            );
        }
    }
    render() {
        return (
            <View style={styles.panel}>
                {this.state.buttonId < 7 ?
                    <View>
                        <View style={styles.photoPanel} >
                            <Image style={styles.images} source={asset(this.props.image)} />
                        </View >
                        <View style={{ flexDirection: 'row', height: 200, padding: 20 }}>
                            <View style={{ flex: 0.5 }}>
                                <VrButton onClick={this.previousPhoto} style={styles.greetingBoxPrevious}>
                                    <Text style={styles.greeting} >Previous</Text>
                                </VrButton>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <VrButton onClick={this.enterInside} style={styles.greetingBoxVisit}>
                                    <Text style={styles.greeting} >Visit {this.props.name} </Text>
                                </VrButton>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <VrButton onClick={this.nextPhoto} style={styles.greetingBoxNext}>
                                    <Text style={styles.greeting} >Next </Text>
                                </VrButton>
                            </View>
                        </View>
                    </View> :
                    <View>
                        <View>
                            <Text>Do you want to start again? </Text>
                            <View style={{ flexDirection: 'row', height: 200, padding: 20 }}>
                                <View style={{ flex: 0.5 }}>
                                    <VrButton onClick={this.okButton} style={styles.greetingBoxPrevious}>
                                        <Text style={styles.greeting} >OK</Text>
                                    </VrButton>
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <VrButton onClick={this.stopButton} style={styles.greetingBoxPrevious}>
                                        <Text style={styles.greeting} >Stop</Text>
                                    </VrButton>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',

    },
    photoPanel: {
        width: 1000,
        height: 400,
    },
    greetingBoxNext: {
        backgroundColor: '#000000',
        borderColor: 'green',
        borderWidth: 2,
        width: 200,
        height: 150,
        marginLeft: 120,

    }, greetingBoxVisit: {
        backgroundColor: '#000000',
        borderColor: 'green',
        borderWidth: 2,
        width: 300,
        height: 100,


    },
    greetingBoxPrevious: {
        backgroundColor: '#000000',
        borderColor: 'yellow',
        borderWidth: 2,
        width: 200,
        height: 50,
        width: 200,
        height: 150,
    },
    images: {
        width: 1000,
        height: 400
    },
    greeting: {
        fontSize: 30,
    },
    greetingPlaceInfo: {
        fontSize: 70,
        marginLeft: 50
    }
});

const ConnectedMainPanel = connect(slideshow);

export default ConnectedMainPanel;