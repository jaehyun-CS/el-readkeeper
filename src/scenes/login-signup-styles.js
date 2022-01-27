// Contains some styling rules shared by both login and signup pages

export const styles = {
    loginBox: {
        backgroundColor: '#D9D9D9',
        textAlign: 'center',
        margin: '5em auto 5em auto',
        width: '25%',
        padding: '2em 2em 2em 2em'
    },
    fieldBox: {
        margin: '1em auto 1em auto',
        display: 'block',
    },
    title: {
        color: '#260101',
        fontFamily: 'Didot',
        paddingBottom: '.25em'
    },
    subtitle: {
        fontFamily: 'Avenir Next'
    },
    submitButton: {
        fontFamily: 'Avenir Next',
        margin: '1em auto 1em auto',
        display: 'block',
        backgroundColor: '#260101',

        '&:hover': {
            backgroundColor: '#8C4D3F'
        }
    },
    redirectButton: {
        margin: '1em auto auto auto',
        display: 'block'
    },
    redirectText: {
        fontFamily: 'Avenir Next',
        color: 'black'
    }
};