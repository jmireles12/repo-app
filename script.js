var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 425652b2cf1bde8f0ab72c3bd020e40303c016a2");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getRepos(user) {
    fetch(`https://api.github.com/users/${user}/repos`, requestOptions)
  .then(response => response.json())
  .then(responseJson => displayResult(responseJson))
  .catch(error => alert('error'));
  console.log(responseJson)
};

function displayResult(responseJson) {
    //for (let i = 0; i < result.length; i++) {
        console.log(responseJson);
        $('#result-list').append(`<li>${responseJson.message}</li>`);
        $('#result').removeClass('hidden');
    //}

}

function watchForm() {
    $('form').submit(event => {
        let name = $(user).val();
        console.log('submit');
        event.preventDefault();
        getRepos(name);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});