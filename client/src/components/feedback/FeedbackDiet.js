import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    panel: {
        padding: theme.spacing(0.2, 0),
    }
}));

const QnADiet = (props) => {
    const classes = useStyles();

    const [feedbackDiet, setFeedbackDiet] = useState({
        feedback: '',
    })
    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>피드백 운동</h1>
            <div className='feedbackDiet'>
                <ExpansionPanel className={classes.panel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>사진: {props.image}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            피드백: {props.feedback}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <form method='post' action='/api/feedbackDiet'>
                    <div class="form-group">
                        <label for="feedback" class="form-label mt-4">피드백 입력</label>
                        <textarea class="form-control" id="feedback" name='feedback' placeholder='피드백 입력' onChange={inputChange}
                            className='write_feedback' />
                    </div>
                    {/* <input type='text' value={sessionStorage.getItem('id')} placeholder='id 입력' name='id' onChange={inputChange}
                        className='write_writer_id' /> */}
                    <input type='submit' value='입력' onClick={() => document.location.href = './FeedbackDiet'} className='feedback_submit' />
                </form>

            </div>
        </div>
    )
}

export default QnADiet;