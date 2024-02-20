
let details=[{"id":1,"first_name":"Brear","last_name":"Warn","email":"bwarn0@admin.ch","gender":"Female"},
{"id":2,"first_name":"Ritchie","last_name":"Wickardt","email":"rwickardt1@linkedin.com","gender":"Male"},
{"id":3,"first_name":"Alf","last_name":"Tures","email":"atures2@weebly.com","gender":"Male"},
{"id":4,"first_name":"Glynn","last_name":"Gentery","email":"ggentery3@patch.com","gender":"Male"},
{"id":5,"first_name":"Charisse","last_name":"Nicklen","email":"cnicklen4@techcrunch.com","gender":"Genderfluid"},
{"id":6,"first_name":"Martainn","last_name":"Pleasaunce","email":"mpleasaunce5@mozilla.org","gender":"Male"},
{"id":7,"first_name":"Rodi","last_name":"Beachamp","email":"rbeachamp6@cmu.edu","gender":"Female"},
{"id":8,"first_name":"Burnard","last_name":"Damato","email":"bdamato7@sphinn.com","gender":"Male"},
{"id":9,"first_name":"Tessi","last_name":"McKeon","email":"tmckeon8@digg.com","gender":"Female"},
{"id":10,"first_name":"Nikola","last_name":"Markushkin","email":"nmarkushkin9@weebly.com","gender":"Male"},
{"id":11,"first_name":"Etti","last_name":"McGuggy","email":"emcguggya@wordpress.org","gender":"Female"},
{"id":12,"first_name":"Aksel","last_name":"Blampey","email":"ablampeyb@mysql.com","gender":"Male"},
{"id":13,"first_name":"Freddie","last_name":"Ciccerale","email":"fcicceralec@time.com","gender":"Male"},
{"id":14,"first_name":"Veriee","last_name":"Heskey","email":"vheskeyd@google.ca","gender":"Female"},
{"id":15,"first_name":"Sigfried","last_name":"Upward","email":"supwarde@reuters.com","gender":"Male"},
{"id":16,"first_name":"Stesha","last_name":"Altofts","email":"saltoftsf@pagesperso-orange.fr","gender":"Female"},
{"id":17,"first_name":"Georgine","last_name":"Goodwin","email":"ggoodwing@devhub.com","gender":"Female"},
{"id":18,"first_name":"Trescha","last_name":"Girardot","email":"tgirardoth@baidu.com","gender":"Female"},
{"id":19,"first_name":"Lou","last_name":"Hollows","email":"lhollowsi@techcrunch.com","gender":"Male"},
{"id":20,"first_name":"Merci","last_name":"Loy","email":"mloyj@goo.gl","gender":"Genderfluid"}];


function allLoad()
{
    let detailsBody;
    for(let i=0;i<details.length;i++)
    {
        detailsBody +=`<tr>
        <td>${details[i].id}</td>
        <td>${details[i].first_name}</td>
        <td>${details[i].last_name}</td>
        <td>${details[i].email}</td>
        <td>${details[i].gender}</td></tr>
        `;
    }

    document.getElementById('d-body').innerHTML = detailsBody;

}

function maleLoad()
{
    let detailsBody;
    for(let i=0;i<details.length;i++)
    {
        if(details[i].gender === "Male"){
            detailsBody +=`<tr>
            <td>${details[i].id}</td>
            <td>${details[i].first_name}</td>
            <td>${details[i].last_name}</td>
            <td>${details[i].email}</td>
            <td>${details[i].gender}</td></tr>
            `;
        }
    }

    document.getElementById('d-body').innerHTML = detailsBody;
}

function femaleLoad()
{
    let detailsBody;
    for(let i=0;i<details.length;i++)
    {
        if(details[i].gender === "Female"){
            detailsBody +=`<tr>
            <td>${details[i].id}</td>
            <td>${details[i].first_name}</td>
            <td>${details[i].last_name}</td>
            <td>${details[i].email}</td>
            <td>${details[i].gender}</td></tr>
            `;
        }
    }

    document.getElementById('d-body').innerHTML = detailsBody;
}

document.getElementById('search').addEventListener("change", (event) => {
    let current = event.target.value;
    let detailsBody;
    for(let i=0;i<details.length;i++){
        if(details[i].first_name.startsWith(current)){
            detailsBody +=`<tr>
            <td>${details[i].id}</td>
            <td>${details[i].first_name}</td>
            <td>${details[i].last_name}</td>
            <td>${details[i].email}</td>
            <td>${details[i].gender}</td></tr>
            `;
        }
    }

    document.getElementById('d-body').innerHTML = detailsBody;
});