
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 6ac81b7d5b55b3648e27f614a3ae07d4e6cdc544");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=full_name&direction=desc`, requestOptions)
  .then(response => response.text())
  .then(result => displayResult(result))
  .catch(error => alert('error'));
};

function displayResult(result) {
    for (let i = 0; i < result.length; i++) {
        console.log(result);
        $('#result-list').append(`<li class=repo-list>${responseJson.full_name}</li>`)
        $('.result').removeClass('hidden');
    }

}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let name = $('#js-search').val()
        console.log('submit');
        getRepos(name)
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});