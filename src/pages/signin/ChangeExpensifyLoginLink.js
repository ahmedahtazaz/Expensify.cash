import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import {restartSignin} from '../../libs/actions/Session';
import themeColors from '../../styles/themes/default';
import ONYXKEYS from '../../ONYXKEYS';

const propTypes = {
    // The credentials of the logged in person
    credentials: PropTypes.shape({
        // The email the user logged in with
        login: PropTypes.string,
    }).isRequired,
};

const ChangeExpensifyLoginLink = ({credentials}) => (
    <View style={[styles.mb4]}>
        <TouchableOpacity
            style={[styles.link]}
            onPress={restartSignin}
            underlayColor={themeColors.componentBG}
        >
            <Text style={[styles.link]}>
                Not&nbsp;
                {credentials.login}
            </Text>
        </TouchableOpacity>
    </View>
);

ChangeExpensifyLoginLink.propTypes = propTypes;
ChangeExpensifyLoginLink.displayName = 'ChangeExpensifyLoginLink';

export default withOnyx({
    credentials: {key: ONYXKEYS.CREDENTIALS},
})(ChangeExpensifyLoginLink);
