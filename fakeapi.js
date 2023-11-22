fetch("https://jsonplaceholder.typicode.com/posts").then(
            res=> {
                res.json().then(
                    data=>{
                        console.log(data);
                        if(data.length>0)
                        {
                            var temp="";
                            data.forEach((itemData)=>
                            {
                                temp+="<tr>";
                                temp+= "<td>" + itemData.userId +"</td>";
                                temp+= "<td>" + itemData.id +"</td>";
                                temp+= "<td>" + itemData.title +"</td>";
                                temp+= "<td>" + itemData.body+"</td>";
                                
                                temp+= "</tr>"; 
                            });
                            document.getElementById('data').innerHTML=temp;
                        }

                    }
                )
            }
        
        )