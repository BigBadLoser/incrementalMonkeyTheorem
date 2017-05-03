/*global $*/
function Contract(title, id, reward, description){
    this.title = title;
    this.reward = reward;
    this.description = description;
    this.id = id;
    this.active = false;
    this.complete = false;
    
    this.html = '<div class="panel panel-primary panel-info" id="' + id +'"> \
        <div class="panel-heading text-center"> <h5>' + title + '</h5><h6>Reward: $' + reward + '</h6></div> \
            <div class="panel-body"> \
                ' + description + ' \
            </div> \
    </div>'
}

var test = new Contract("Test Title", "test", 100000, "This is a test description");
var test2 = new Contract("Test Title2", "test2", 10, "test")
function createContracts(){
    $("#contractsContainer").html(test.html);
    $("#contractsContainer").append(test2.html);
}

function updateContracts(){
    //update contracts here man
}