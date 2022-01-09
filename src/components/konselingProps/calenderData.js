export default function Caldata(data){
    if(data === undefined){
        return ""
    }else{
        data.forEach(element => {
            element["startdate"] = new Date(element["startdate"])
            element["enddate"] = new Date(element["enddate"])
        });
        return data
    }

}

