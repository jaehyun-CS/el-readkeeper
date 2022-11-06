import { Grid, Typography } from '@mui/material';
import AppHeader from '../../components/AppHeader';
import { useAuth } from '../../context/AuthContext';
import './index.css';
import { getUserName } from '../../services/user-services';


const styles = {
    heading: {
        fontFamily: 'Avenir Next Condensed',
        color: '#260101',
        fontWeight: 'medium',
        paddingTop: '.5em',
        marginLeft: '.7em'
    },
};

const ProfilePage = (): JSX.Element => {
    const { currentUser } = useAuth();

    console.log( currentUser );

    return (
        <>
            <AppHeader />
            <Grid container>
                <Grid item>
                    <Typography variant='h3' sx={ styles.heading }>
                        {`Your Profile, ${ currentUser.uid }`}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfilePage;