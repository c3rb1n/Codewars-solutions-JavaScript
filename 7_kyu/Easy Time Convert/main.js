const timeConvert = num => {
    if(num <= 0) {
        return "00:00";
    }
  
    let hours = Math.floor(num / 60) + "";
    let minutes = num % 60;
  
    hours = hours >= 10 ? hours : `0${hours}`;
    minutes = minutes >= 10 ? minutes : `0${minutes}`;
  
    return `${hours}:${minutes}`;
};