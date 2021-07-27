function convertToTime(int){
    let minutes = int % 60;
    let hours = Math.floor(int/60);
    if (int === 1){
        return 0 + ' hours, ' + int + ' minute';
    }else if (int > 1 && int < 60){
        return  0 + ' hours, ' +  int + ' minutes';
    }else if (minutes === 0 && hours >= 1){
        if (minutes === 0 && hours === 1){
            return hours + ' hour, ' + 0 + ' minutes';
        } else if (minutes === 0 && hours > 1){
            return hours + ' hours, ' + 0 + ' minutes';
        }
    }else if (minutes >= 1 && hours >= 1){
        if (minutes > 1 && hours > 1){
            return hours + ' hours, ' + minutes + ' minutes';
        } else if (minutes === 1 && hours > 1){
            return hours + ' hours, ' + minutes + ' minute';
        }else if (minutes === 1 && hours === 1){
            return hours + ' hour, ' + minutes + ' minute';
        }else if (minutes > 1 && hours === 1){
            return hours + ' hour, ' + minutes + ' minutes';
        }
    }else{
        return 0 + ' hours, ' + 0 + ' minutes ';
    }
}
convertToTime(130);
