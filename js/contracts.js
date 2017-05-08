/*global $*/
var contracts = [];
function Contract(title, id, reward, description){
    this.title = title;
    this.reward = reward;
    this.description = description;
    this.id = id;
    this.active = false;
    this.complete = false;
    this.addTo = function (){contracts.push(this);}; this.addTo();
    
    this.html = '<div class="panel panel-primary panel-info" onclick="" id="' + id +'"> \
        <div class="panel-heading text-center"> <h5>' + title + '</h5><h6>Reward: $' + reward + '</h6></div> \
            <div class="panel-body"> \
                ' + description + ' \
            </div> \
    </div>'
}

function createContracts(){
    var test = new Contract("Test Title", "test", 100000, "This is a test description");
    
    for (var i = 0; i < contracts.length; i++){
        $("#contracts").append(contracts[i].html);
    }
}

function updateContracts(){
    //update contracts here man
}