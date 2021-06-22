
import React from 'react'
import{Card,CardContent,Typography} from  '@material-ui/core';
function infoBox({title,cases,total}) {
    return (
        <Card className="infoBox">
            <CardContent>

        <Typography className="infoBox__title" color="primary">{title}</Typography>
        <Typography className="infoBox__cases" color="testPrimary">Today:{cases}</Typography>
        <Typography className="infoBox__total" color="textPrimary">Total:{total} </Typography>

            </CardContent>
            
        </Card>
    )
}

export default infoBox
