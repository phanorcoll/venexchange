import React from 'react';
import PropTypes from 'prop-types';

var styles = {
    content: {
        textAlign: 'center',
        fontSize: '25px',
        margin: '20px 0px 0px 0px'
    }
}

const Loading = (props) => {
    return (
        <div>
            <div className="loader"></div>
            <p style={styles.content}>
                {props.text}
            </p>
        </div>
    );
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
};

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
};

export default Loading;