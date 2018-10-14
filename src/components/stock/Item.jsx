import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animationName: '',
        };
    }
    componentDidMount() {
        this.applyAnimation();
    }
    applyAnimation() {
        const maxScale = 0.3 + 0.7 * (this.props.current / this.props.basis);
        const animationName = `animation-scale-up-${Math.round(Math.random() * 100)}`;
        let styleSheet = document.styleSheets[0];
        let keyframeStyle = `
            @-webkit-keyframes ${animationName} {
                0% {
                    -webkit-transform: scale(0.3);
                            transform: scale(0.3);
                }
                100% {
                    -webkit-transform: scale(${maxScale});
                            transform: scale(${maxScale});
                }
            }
        `;
        styleSheet.insertRule(keyframeStyle, styleSheet.cssRules.length);
        keyframeStyle = `
            @keyframes ${animationName} {
                0% {
                    -webkit-transform: scale(0.3);
                            transform: scale(0.3);
                }
                100% {
                    -webkit-transform: scale(${maxScale});
                            transform: scale(${maxScale});
                }
            }
        `;
        styleSheet.insertRule(keyframeStyle, styleSheet.cssRules.length);
        this.setState({ animationName });
    }
    render () {
        const styles = {
            root: {
                position: 'relative',
                display: 'flex',
                width: '100px',
                height: '100px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            circle: {
                backgroundColor: '#F77368',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                animationName: this.state.animationName,
                animationDuration: '0.4s',
                animationTimingFunction: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                animationFillMode: 'both',
            },
            text: {
                color: '#fff',
                position: 'absolute',
                fontSize: '20px',
            }
        }
        return (
            <div style={styles.root}>
                <div style={{...styles.circle, ...this.props.styles}} />
                <div style={styles.text}>{ this.props.current }</div>
            </div>
        );
    }
}

Item.propTypes = {
    current: PropTypes.number.isRequired,
    basis: PropTypes.number.isRequired,
    styles: PropTypes.shape(),
};

Item.defaultProps = {
    styles: {},
};

export default Item;
