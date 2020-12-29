var meetings = [
    {
        startTime: 2,
        endTime: 3
    },
    {
        startTime: 5,
        endTime: 6
    },
    {
        startTime: 3,
        endTime: 4
    },
    {
        startTime: 2,
        endTime: 4
    }

]

function checkObjectArray({ startTime, endTime })
{
    var newMeeting = {};
    if (meetings.startTime === mettings.endTime || meetings.endTime === meetings.startTime) {
        return false;
    }
    else if (meetings.startTime < mettings.endTime || meetings.endTime < meetings.startTime){
        startTime.push(newMeeting) & endTime.push(newMeeting)
    }
return newMeeting;
}
function mergeRanges(newMeeting){
    newMeeting.push(meetings)
   
};
console.log(meetings)