import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './card';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/es/Paper/Paper";

const DATALIST_REST_URL = 'test:123/wow';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class Inbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: JSON.parse('[{"author":"Gmail Team <mail-noreply@google.com>","title":"The best of Gmail, wherever you are","text":"Hi hackaburg Get the official Gmail app The best features of Gmail are only available on your phone and tablet with the official Gmail app. Download the app or go to gmail.com on your computer or","timestamp":"1527293001000"}, {"author":"Gmail Team <mail-noreply@google.com>","title":"Three tips to get the most out of Gmail","text":"Hi hackaburg Tips to get the most out of Gmail Bring your contacts and mail into Gmail On your computer, you can copy your contacts and emails from your old email account to make the transition to","timestamp":"1527293000000"}, {"author":"Gmail Team <mail-noreply@google.com>","title":"Stay more organized with Gmail\'s inbox","text":"Hi hackaburg Gmail&#39;s inbox puts you in control Inbox video Meet the inbox Gmail&#39;s inbox sorts your email into categories so you can see what&#39;s new at a glance, decide which emails you want","timestamp":"1527293001000"}, {"author":"Google <no-reply@accounts.google.com>","title":"Google APIs Explorer connected to your Google Account","text":"Google APIs Explorer connected to your Google Account Hi hackaburg, Google APIs Explorer now has access to your Google Account hackaburg.dashboard@gmail.com. Google APIs Explorer can: Read, send,","timestamp":"1527340143000"}]')

        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.state.dataList.push({"author":"Google <no-reply@accounts.google.com>",
            "title":"Google APIs Explorer connected to your Google Account",
            "text":"test123" + Math.random(),
            "timestamp":"1527340143000"});

        this.setState({
            dataList: this.state.dataList
        });

        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         console.log(this.responseText);
        //         this.setState({
        //             dataList: JSON.parse(this.responseText)
        //         });
        //     }
        // };
        // xhttp.open("GET", DATALIST_REST_URL, true);
        // xhttp.send();

    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {this.state.dataList.map(function(o, i){
                        return <Grid item xs={6}>
                            <Card obj={o} key={i} />
                        </Grid>;
                    })}
                </Grid>
            </div>
        );
    }
}


Inbox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inbox);
