export default function Caldata(data){
    if(data === undefined){
        return ""
    }else{
        data.forEach(element => {
            element["start"] = element["start"].slice(0, 19);
            element["end"] = element["end"].slice(0, 19);
        });
        return data
    }

}

