var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer aa3d1f6acc68f7242af0a9b193c0b15f9bd8ada3");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getRepos(user) {
    fetch(`https://api.github.com/users/${user}/repos?type=owner&sort=full_name&direction=desc`, requestOptions)
    .then(response => response.json())
    .then(responseJson => displayResult(responseJson))
    .catch(error => alert('Network error'));
};

function displayResult(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        console.log(responseJson);
        $('#result-list').append(`<li>Repo name:${responseJson[i].name}<br> 
        Repo url: <a href="https://github.com/${responseJson[i].full_name}.git">https://github.com/${responseJson[i].full_name}.git</a></li>`);
        $('#result').removeClass('hidden');
    }

}

function watchForm() {
    $('form').submit(event => {
        let name = $('input[type="search"]').val();
        console.log('submit');
        event.preventDefault();
        getRepos(name);
        $('#result-list').html('');
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});